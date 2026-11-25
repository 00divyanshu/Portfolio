from pathlib import Path
import streamlit as st
import streamlit.components.v1 as components

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

base_dir = Path(__file__).parent
html_content = (base_dir / "index.html").read_text(encoding="utf-8")
styles_content = (base_dir / "styles.css").read_text(encoding="utf-8")
html_content = html_content.replace(
    '<link rel="stylesheet" href="styles.css" />',
    f"<style>{styles_content}</style>",
)

components.html(html_content, height=900, scrolling=True)
