"""Generate the downloadable CV. Install scripts/requirements-cv.txt first."""
import json
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak

ROOT = Path(__file__).resolve().parents[1]
CAREER = json.loads((ROOT / 'src/data/career.json').read_text())
OUTPUT = ROOT / 'public/nicholas-fitton-cv.pdf'
PURPLE = colors.HexColor('#713c96')
INK = colors.HexColor('#242029')
GREY = colors.HexColor('#5c5562')
styles = {
    'name': ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=30, leading=35, textColor=INK, spaceAfter=8),
    'subtitle': ParagraphStyle('subtitle', fontName='Helvetica', fontSize=13, leading=18, textColor=PURPLE, spaceAfter=12),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=10, leading=14.5, textColor=INK, spaceAfter=9),
    'meta': ParagraphStyle('meta', fontName='Helvetica', fontSize=9, leading=13, textColor=GREY, spaceAfter=9),
    'section': ParagraphStyle('section', fontName='Helvetica-Bold', fontSize=10, leading=14, textColor=PURPLE, spaceBefore=18, spaceAfter=12, keepWithNext=True),
    'job': ParagraphStyle('job', fontName='Helvetica-Bold', fontSize=15, leading=19, textColor=INK, spaceAfter=5, keepWithNext=True),
    'role': ParagraphStyle('role', fontName='Helvetica-Bold', fontSize=10, leading=14, textColor=INK, spaceAfter=5, keepWithNext=True),
    'bullet': ParagraphStyle('bullet', fontName='Helvetica', fontSize=10, leading=14.5, textColor=INK, leftIndent=11, firstLineIndent=-11, spaceAfter=8),
}


def clean(text):
    return escape(text.replace('’', "'").replace('–', '-').replace('—', '-'))


story = []


def para(text, style='body', markup=False):
    story.append(Paragraph(text if markup else clean(text), styles[style]))


def job(index):
    item = CAREER[index]
    para(item['company'], 'job')
    para(item['role'], 'role')
    para(item['dates'], 'meta')
    for bullet in item['bullets']:
        para('- ' + bullet, 'bullet')
    if item['progression']:
        para(' | '.join(item['progression']), 'meta')


def footer(canvas, doc):
    width, _ = A4
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor('#ded7e4'))
    canvas.line(46, 42, width - 46, 42)
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(GREY)
    canvas.drawString(46, 28, 'Nicholas Fitton | resume@nfitton.com')
    canvas.drawRightString(width - 46, 28, str(doc.page))
    canvas.restoreState()


para('Nicholas Fitton', 'name')
para('Senior full-stack engineer | Open to engineering lead roles', 'subtitle')
para('<link href="mailto:resume@nfitton.com" color="#713c96">resume@nfitton.com</link>  |  <link href="https://nfitton.com" color="#713c96">nfitton.com</link>  |  Chepstow, South Wales', 'meta', True)
para('Remote preferred, with occasional London get-togethers. Also open to full-time office-based roles in Bristol or Cardiff.', 'meta')
para('PROFILE', 'section')
para('Senior full-stack engineer with experience leading projects and managing a small engineering team. I turn broad product problems into practical plans, work with stakeholders to shape solutions, and deliver alongside the team. Seeking an engineering lead role, particularly with a company improving working lives or advancing a positive environmental mission.')
para('EXPERIENCE', 'section')
job(0)
para('TECHNICAL & LEADERSHIP STRENGTHS', 'section')
para('<b>Product engineering:</b> React, React Native, ReScript, TypeScript, Relay and Feathers.js; experience across web and mobile.', markup=True)
para('<b>Integrations and data:</b> API evaluation, webhooks, data modelling, BigQuery and transactional outboxes.', markup=True)
para('<b>Team delivery:</b> Milestone planning, stakeholder alignment, work allocation, one-to-ones, mentoring and hands-on implementation.', markup=True)
story.append(PageBreak())
para('EXPERIENCE / CONTINUED', 'section')
job(1)
story.append(Spacer(1, 10))
job(2)
para('EDUCATION & TEACHING', 'section')
para('Middlesex University', 'job')
para('Bachelor\'s degree, Computer Science | 2015-2019', 'role')
para('First class, with internship year.')
para('Student Learning Assistant', 'role')
para('September 2016-May 2017 and October 2018-May 2019', 'meta')
para('Supported the teaching of first- and second-year Computer Science students.')

doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=46, leftMargin=46,
                        topMargin=42, bottomMargin=58, title='Nicholas Fitton - CV',
                        author='Nicholas Fitton', subject='Engineering lead roles')
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
