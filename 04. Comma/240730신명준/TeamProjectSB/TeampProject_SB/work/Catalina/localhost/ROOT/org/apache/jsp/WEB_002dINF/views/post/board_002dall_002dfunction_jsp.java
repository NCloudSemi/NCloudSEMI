/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/10.1.25
 * Generated at: 2024-08-05 08:36:48 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.views.post;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.jsp.*;

public final class board_002dall_002dfunction_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports,
                 org.apache.jasper.runtime.JspSourceDirectives {

  private static final jakarta.servlet.jsp.JspFactory _jspxFactory =
          jakarta.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.LinkedHashSet<>(4);
    _jspx_imports_packages.add("jakarta.servlet");
    _jspx_imports_packages.add("jakarta.servlet.http");
    _jspx_imports_packages.add("jakarta.servlet.jsp");
    _jspx_imports_classes = null;
  }

  private volatile jakarta.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public boolean getErrorOnELNotFound() {
    return false;
  }

  public jakarta.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final jakarta.servlet.http.HttpServletRequest request, final jakarta.servlet.http.HttpServletResponse response)
      throws java.io.IOException, jakarta.servlet.ServletException {

    if (!jakarta.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      final java.lang.String _jspx_method = request.getMethod();
      if ("OPTIONS".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        return;
      }
      if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSP들은 오직 GET, POST 또는 HEAD 메소드만을 허용합니다. Jasper는 OPTIONS 메소드 또한 허용합니다.");
        return;
      }
    }

    final jakarta.servlet.jsp.PageContext pageContext;
    jakarta.servlet.http.HttpSession session = null;
    final jakarta.servlet.ServletContext application;
    final jakarta.servlet.ServletConfig config;
    jakarta.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    jakarta.servlet.jsp.JspWriter _jspx_out = null;
    jakarta.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("<head>\r\n");
      out.write("    <title>게시판 모든 modal 구현 버전</title>\r\n");
      out.write("    <!-- js link -->\r\n");
      out.write("    <script src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/js/jquery-3.7.1.min.js\"></script>\r\n");
      out.write("    <script src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/js/board.js\"></script>\r\n");
      out.write("    <script src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/js/board-view-modal.js\"></script>\r\n");
      out.write("    <script src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/js/board-write-modal.js\"></script>\r\n");
      out.write("    <script src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/js/board-all-function.js\"></script>\r\n");
      out.write("    <!-- bootstrap5 link -->\r\n");
      out.write("    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH\" crossorigin=\"anonymous\">\r\n");
      out.write("    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\" crossorigin=\"anonymous\"></script>\r\n");
      out.write("    <!-- style css link -->\r\n");
      out.write("    <link rel=\"stylesheet\" href=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/css/sidebar-template.css\">\r\n");
      out.write("    <link rel=\"stylesheet\" href=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/css/board.css\">\r\n");
      out.write("    <link rel=\"stylesheet\" href=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/css/board-view-modal.css\">\r\n");
      out.write("    <link rel=\"stylesheet\" href=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/css/board-write-modal.css\">\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("    <div class=\"wrap\">\r\n");
      out.write("        <div class=\"sidebar\">\r\n");
      out.write("            <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Sidebar-Header-Logo.svg\" class=\"sidebar-logo\" alt=\"Sidebar-Header-Logo\">\r\n");
      out.write("            <div class=\"sidebar-buttons\">\r\n");
      out.write("                <button>Travel Information</button>\r\n");
      out.write("                <button style=\"color: #FF6B00;\">Card Board</button>\r\n");
      out.write("                <button>My Page</button>\r\n");
      out.write("                <button id=\"logout\">Logout</button>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"sidebar-footer\">\r\n");
      out.write("                <p>Tel.&nbsp;&nbsp;000-0000-0000</p>\r\n");
      out.write("                <p>Fax.&nbsp;&nbsp;00-0000-0000</p>\r\n");
      out.write("                <p>E-mail.&nbsp;&nbsp;comma@comma.com</p>\r\n");
      out.write("                <p>Addr.&nbsp;&nbsp;Seoul, Korea</p>\r\n");
      out.write("                <p>Hosting by COMMA</p>\r\n");
      out.write("                <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Siderbar-Footer-Logo.svg\" alt=\"Sidebar-Header-Logo\">\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"content\">\r\n");
      out.write("            <div class=\"search-bar\">\r\n");
      out.write("                <button type=\"button\">\r\n");
      out.write("                    <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Search-Button.svg\" alt=\"Search-Button\">\r\n");
      out.write("                </button>\r\n");
      out.write("                <input type=\"text\" placeholder=\"검색어를 입력하세요.\">\r\n");
      out.write("                <button class=\"write-button\">✏️</button>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"card-box\" id=\"cardContainer\">\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("        <!-- view-modal -->\r\n");
      out.write("        <div id=\"view-modal\" class=\"board-modal\" style=\"opacity: 0; z-index: -1;\">\r\n");
      out.write("            <div class=\"modal-box\">\r\n");
      out.write("                <div class=\"modal-img\">\r\n");
      out.write("                    <button class=\"slide-button prev\">&#10094;</button>\r\n");
      out.write("                    <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Example_Img1.svg\" alt=\"Example_Img1\" class=\"slide-image\">\r\n");
      out.write("                    <button class=\"slide-button next\">&#10095;</button>\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"modal-content\">\r\n");
      out.write("                    <div class=\"edit-delete-buttons\">\r\n");
      out.write("                        <button class=\"edit\">✍️</button>\r\n");
      out.write("                        <button class=\"delete\">🗑️</button>\r\n");
      out.write("                    </div>\r\n");
      out.write("                    <div class=\"writer-profile-box\">\r\n");
      out.write("                        <div class=\"writer-image-box\">\r\n");
      out.write("                            <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Writer.svg\" alt=\"글쓴이 프로필 사진\" class=\"writer-image\">\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <div class=\"writer-info\">\r\n");
      out.write("                            <div class=\"writer-name\">Sovely._.153</div>\r\n");
      out.write("                            <div class=\"writer-location\">Cheonan, South Korea</div>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Writer-Rank.svg\" alt=\"글쓴이 여행 등급 사진\" class=\"writer-rank-image\">\r\n");
      out.write("                    </div>\r\n");
      out.write("                    <div class=\"modal-text\">\r\n");
      out.write("                        <textarea name=\"title\" id=\"title\" readonly>제목 test</textarea>\r\n");
      out.write("                        <textarea name=\"memo\" id=\"memo\" readonly>내용 test</textarea>\r\n");
      out.write("                    </div>\r\n");
      out.write("                    <div class=\"modal-text-line\"></div>\r\n");
      out.write("                    <div class=\"modal-interaction\">\r\n");
      out.write("                        <button class=\"modal-interaction-like-button\">\r\n");
      out.write("                            <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Liked-Icon.svg\" alt=\"좋아요\">\r\n");
      out.write("                        </button>\r\n");
      out.write("                        <span class=\"modal-interaction-like-count\">15,132</span>\r\n");
      out.write("                        <button class=\"share-button\">\r\n");
      out.write("                            <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Share.svg\" alt=\"공유\">\r\n");
      out.write("                        </button>\r\n");
      out.write("                        <button class=\"plan-button\" href=\"#\">\r\n");
      out.write("                            <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Plan_Icon.svg\" alt=\"\">\r\n");
      out.write("                        </button>\r\n");
      out.write("                    </div>\r\n");
      out.write("                    <div class=\"modal-comment-box\">\r\n");
      out.write("                        <div class=\"comment\">\r\n");
      out.write("                            <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Comment1.svg\" alt=\"Comment1\" class=\"commenter-image\">\r\n");
      out.write("                            <div class=\"comment-content\">\r\n");
      out.write("                                <div class=\"commenter-info\">\r\n");
      out.write("                                    <span class=\"commenter-name\">inner_dev</span>\r\n");
      out.write("                                    <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Comment1-Rank.svg\" alt=\"rank\" class=\"commenter-rank\">\r\n");
      out.write("                                </div>\r\n");
      out.write("                                <p class=\"comment-text\">미친.. 대박😲🫢 인피니티 풀 장난 아니네요;;;</p>\r\n");
      out.write("                                <button class=\"reply-button\">답글 달기</button>\r\n");
      out.write("                            </div>\r\n");
      out.write("                            <button class=\"like-button\">\r\n");
      out.write("                                <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Unliked-Icon.svg\" alt=\"좋아요\">\r\n");
      out.write("                            </button>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <div class=\"comment\">\r\n");
      out.write("                            <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Comment2.svg\" alt=\"Comment2\" class=\"commenter-image\">\r\n");
      out.write("                            <div class=\"comment-content\">\r\n");
      out.write("                                <div class=\"commenter-info\">\r\n");
      out.write("                                    <span class=\"commenter-name\">hsmt_y</span>\r\n");
      out.write("                                    <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Comment2-Rank.svg\" alt=\"rank\" class=\"commenter-rank\">\r\n");
      out.write("                                </div>\r\n");
      out.write("                                <p class=\"comment-text\"><span id=\"tag\">@i_m_0._.</span> 나영쓰.. 여기다.. 가자! 나 다음 여행 때 저기 무조건 데리고 가줘.. 제바류ㅠㅠ🥹🥹🥹🥹🥹</p>\r\n");
      out.write("                                <button class=\"reply-button\">답글 달기</button>\r\n");
      out.write("                            </div>\r\n");
      out.write("                            <button class=\"like-button\">\r\n");
      out.write("                                <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Liked-Icon.svg\" alt=\"좋아요\">\r\n");
      out.write("                            </button>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <div class=\"comment\">\r\n");
      out.write("                            <div class=\"commenter-image-wrapper\">\r\n");
      out.write("                                <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Comment3.svg\" alt=\"Comment3\" class=\"commenter-image\">\r\n");
      out.write("                            </div>\r\n");
      out.write("                            <div class=\"comment-content\">\r\n");
      out.write("                                <div class=\"commenter-info\">\r\n");
      out.write("                                    <span class=\"commenter-name\">wmmwSiru</span>\r\n");
      out.write("                                    <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Comment3-Rank.svg\" alt=\"rank\" class=\"commenter-rank\">\r\n");
      out.write("                                </div>\r\n");
      out.write("                                <p class=\"comment-text\">헐... 여행가고 시ㅍ다</p>\r\n");
      out.write("                                <button class=\"show-more-comments\">댓글 더보기</button>\r\n");
      out.write("                                <div class=\"hidden-comments\" style=\"display: none;\">\r\n");
      out.write("                                    <div class=\"hidden-comment\">\r\n");
      out.write("                                        <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Hidden-Comment1.svg\" class=\"hidden-commenter-image\" alt=\"Hidden-Comment1\">\r\n");
      out.write("                                        <div class=\"hidden-comment-content\">\r\n");
      out.write("                                            <div class=\"hidden-commenter-info\">\r\n");
      out.write("                                                <span class=\"hidden-commenter-name\">life_hip_somi</span>\r\n");
      out.write("                                                <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Writer-Rank.svg\" class=\"hidden-commenter-rank\" alt=\"Hidden-Comment1-Rank\">\r\n");
      out.write("                                            </div>\r\n");
      out.write("                                            <p class=\"hidden-comment-text\"><span id=\"tag\">@wmmwSiru</span>ㄹㅇ... 우리 그래서 언제 여행 가는건데;;</p>\r\n");
      out.write("                                        </div>\r\n");
      out.write("                                        <button class=\"hidden-like-button\">\r\n");
      out.write("                                            <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Unliked-Icon.svg\" alt=\"Like\">\r\n");
      out.write("                                        </button>\r\n");
      out.write("                                    </div>\r\n");
      out.write("                                </div>\r\n");
      out.write("                            </div>\r\n");
      out.write("                            <button class=\"like-button\">\r\n");
      out.write("                                <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Liked-Icon.svg\" alt=\"좋아요\">\r\n");
      out.write("                            </button>\r\n");
      out.write("                        </div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                </div>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("        <!-- write modal -->\r\n");
      out.write("        <div id=\"write-modal\" class=\"board-modal\" style=\"opacity: 0; z-index: -1;\">\r\n");
      out.write("            <div class=\"modal-box\">\r\n");
      out.write("                <div class=\"modal-img\">\r\n");
      out.write("                    <button class=\"slide-button prev2\">&#10094;</button>\r\n");
      out.write("                    <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Default-Img.svg\" alt=\"\" class=\"slide-image2\" id=\"main-slide-image\">\r\n");
      out.write("                    <button class=\"slide-button next2\">&#10095;</button>\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"modal-content\">\r\n");
      out.write("                    <div class=\"modal-content\">\r\n");
      out.write("                        <div class=\"edit-delete-buttons\">\r\n");
      out.write("                            <button class=\"photo\">🎞️</button>\r\n");
      out.write("                            <input type=\"file\" id=\"fileInput\" accept=\"image/*\" multiple style=\"display: none;\">\r\n");
      out.write("                            <button class=\"plan-button2\" href=\"#\">\r\n");
      out.write("                                <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Plan_Icon.svg\" alt=\"\">\r\n");
      out.write("                            </button>\r\n");
      out.write("                            <button class=\"save\">💾</button>\r\n");
      out.write("                            <button class=\"delete\">🗑️</button>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <div class=\"writer-profile-box\">\r\n");
      out.write("                            <div class=\"writer-image-box\">\r\n");
      out.write("                                <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Writer.svg\" alt=\"글쓴이 프로필 사진\" class=\"writer-image\">\r\n");
      out.write("                            </div>\r\n");
      out.write("                            <div class=\"writer-info\">\r\n");
      out.write("                                <div class=\"writer-name\">Sovely._.153</div>\r\n");
      out.write("                                <div class=\"writer-location\">Cheonan, South Korea</div>\r\n");
      out.write("                            </div>\r\n");
      out.write("                            <img src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (jakarta.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/static/image/Writer-Rank.svg\" alt=\"글쓴이 여행 등급 사진\" class=\"writer-rank-image\">\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <div class=\"modal-text\">\r\n");
      out.write("                            <textarea name=\"title\" id=\"title\">제목 test</textarea>\r\n");
      out.write("                            <textarea name=\"memo\" id=\"memo\">내용 test</textarea>\r\n");
      out.write("                        </div>\r\n");
      out.write("                        <div class=\"modal-text-line\"></div>\r\n");
      out.write("                        <div class=\"modal-preview-box\" id=\"preview-box\">\r\n");
      out.write("                        </div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                </div>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("</body>\r\n");
      out.write("\r\n");
      out.write("        ");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof jakarta.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
