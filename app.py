from html import escape
from pathlib import Path
import streamlit as st

st.set_page_config(
    page_title="Divyansh Sharma | Portfolio",
    page_icon="✦",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# Hide default Streamlit UI chrome and padding for a full-bleed editorial layout
st.markdown(
    """
    <style>
        #MainMenu,
        header,
        footer,
        [data-testid="stToolbar"],
        [data-testid="stDecoration"],
        [data-testid="stStatusWidget"] {
            display: none !important;
            visibility: hidden !important;
        }
        .stApp,
        [data-testid="stAppViewContainer"],
        [data-testid="stMain"],
        .main {
            background-color: #FAF7F0 !important;
            padding: 0 !important;
            margin: 0 !important;
        }
        .block-container,
        [data-testid="stMainBlockContainer"] {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
        }
        iframe {
            display: block !important;
            width: 100% !important;
            height: 100vh !important;
            border: none !important;
        }
    </style>
    """,
    unsafe_allow_html=True,
)

html_path = Path(__file__).parent / "index.html"
html_content = html_path.read_text(encoding="utf-8")
styles_path = Path(__file__).parent / "styles.css"
styles_content = styles_path.read_text(encoding="utf-8")
html_content = html_content.replace(
    '<link rel="stylesheet" href="styles.css" />',
    f"<style>{styles_content}</style>",
)
embedded_html = escape(html_content, quote=True)

st.markdown(
    f'<iframe title="Divyansh Sharma portfolio" srcdoc="{embedded_html}" '
    'style="display:block;width:100%;height:100vh;border:0" loading="eager"></iframe>',
    unsafe_allow_html=True,
)
