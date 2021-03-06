<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="no-js ie ie67 ie678 ie6789" lang="en"><![endif]-->
<!--[if IE 7 ]><html class="no-js ie ie67 ie678 ie6789 ie7" lang="en"><![endif]-->
<!--[if IE 8 ]><html class="no-js ie ie678 ie6789 ie8" lang="en"><![endif]-->
<!--[if IE 9 ]><html class="no-js ie ie6789 ie9" lang="en"><![endif]-->
<!--[if !(IE)]><!-->
<html lang="en">
<head>
<title>系统公告</title>
<jsp:include page="../common/WerResources.jsp"></jsp:include>
</head>
<body class="layout-two-column unibet custom-background">
	<div id="container">
		<jsp:include page="../common/WerHeader.jsp"></jsp:include>
		<div id="content">
			<div id="top">
				<div class="inner"></div>
			</div>

			<div id="main" role="main">
				<div class="main-container">
					<!-- 右侧内容面板开始 -->
					<div id="column-primary" class="stack gutter-col size4of5">
						<div class="header-image">
							<h2 class="heading">系统公告</h2>
						</div>
						<article class="rich-text-element main-column">
							<article class="widget bingo-game-chooser">
								<form action="" method="post" name="search">
									<table class="bingo-game-chooser-table table-decoration-7 color-theme-4">
										<thead>
						                    <tr>
						                
						                    <th>
						                      <div class="title"><span>主题</span></div>
						                    </th>
						                        <th>
						                      <div class="title"><span>内容</span></div>
						                    </th>
						                    <th>
						                      <div class="title"><span>时间</span></div>
						                    </th>
						                  </tr></thead>
						                  <tbody>
											<c:choose>
												<c:when test="${page != null}">
													<c:forEach items="${page.result}" var="item">
														<tr>
															<td>
																	${item.title} 
															</td>
															<td>
																	${item.content} 
															</td>
															<td><fmt:formatDate value="${item.time.time}"
																	pattern="yyyy-MM-dd HH:mm:ss" />
															</td>
														</tr>
													</c:forEach>
													<tr>
														<td colspan="7"><input type="hidden" id="pageNo"
															name="pageNo" value="1" /> <jsp:include
																page="../../common/frontpager.jsp" /></td>
													</tr>
												</c:when>
												<c:otherwise>
													<tr class="lastTr">
														<td colspan="5">无系统公告</td>
													</tr>
												</c:otherwise>
											</c:choose>
										</tbody>
									</table>
								</form>
							</article>
						</article>
					</div>
					<!-- 右侧内容面板结束 -->
				</div>
			</div>
		</div>
		<jsp:include page="../common/WerFooter.jsp"></jsp:include>
	</div>
</body>
</html>