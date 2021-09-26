export const latestNovel = `
<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<title>Latest Novels - Free Web Novel - Read Novels Online For Free</title>
<meta name="description" content="List of Latest Novels at Free Web Novel. Read all Latest Novels online for free.">
<meta name="keywords" content="Latest Novels, Read Novels Online For Free">
<meta property="og:title" content="Latest Novels - Free Web Novel - Read Novels Online For Free">
<meta property="og:description" content="List of latest novels at Free Web Novel. Read all Latest Novels online for free.">
<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
<meta name="robots" content="index,follow" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="ie=edge,chrome=1">
<link rel="shortcut icon" type="image/x-icon" href="/static/freewebnovel/favicon.ico" media="screen">
<link rel="preload" href="/static/freewebnovel/fonts/RobotoCondensed-Regular.woff" as="font" crossorigin="anonymous">
<link rel="preload" href="/static/freewebnovel/fonts/glyphicons-halflings-regular.woff2" as="font" crossorigin="anonymous">
<link rel="stylesheet" href="/static/freewebnovel/css/style.css" />
<link rel="stylesheet" href="/static/freewebnovel/css/font.css">
<script src="/static/freewebnovel/js/jquery.js"></script>
<script src="/static/freewebnovel/js/lib.js"></script>
</head>
<body class="">
<div class="header">
<div class="head">
<div class="wp">
<div class="head-pc">
<div class="logo">
<a href="/"><img src="/static/freewebnovel/images/logo.png" alt="Read Novels Online Free" title="Read Novels Online Free"></a>
</div>
<ul class="ul-nav">
<li>
<a href="javascript:;" class="v1">
<span class="glyphicon glyphicon-list"></span>
Novel list
<div class="caret"></div>
</a>
<div class="m-dl">
<dl class="d1">
<dd><a href="/history/"><span class="glyphicon glyphicon-bookmark"></span>Your Reading Novels</a></dd>
<dd><a href="/latest-novel/"><span class="glyphicon glyphicon-edit"></span>Latest Novels</a></dd>
<dd><a href="/latest-release-novel/"><span class="glyphicon glyphicon-refresh"></span>Latest Release</a></dd>
<dd><a href="/most-popular-novel/"><span class="glyphicon glyphicon-fire"></span>Most Popular</a></dd>
<dd><a href="/completed-novel/"><span class="glyphicon glyphicon-check"></span>Completed Novels</a></dd>
</dl>
</div>
</li>
<li>
<a href="javascript:;" class="v1">
<span class="glyphicon glyphicon-list"></span>
Genres
<div class="caret"></div>
</a>
<div class="m-dl m-dl-1">
<dl class="d2">
<dd><a href="/genre/Action/" class="a1">ActioAn</a></dd>
<dd><a href="/genre/Adult/">Adult</a></dd>
<dd><a href="/genre/Adventure/" class="a2">AdventCure</a></dd>
<dd><a href="/genre/Comedy/">Comedy</a></dd>
<dd><a href="/genre/Drama/">Drama</a></dd>
<dd><a href="/genre/Ecchi/">Ecchi</a></dd>
 <dd><a href="/genre/Fantasy/">Fantasy</a></dd>
<dd><a href="/genre/Gender+Bender/">Gender Bender</a></dd>
<dd><a href="/genre/Harem/">Harem</a></dd>
</dl>
<dl class="d2">
<dd><a href="/genre/Historical/">Historical</a></dd>
<dd><a href="/genre/Horror/">Horror</a></dd>
<dd><a href="/genre/Josei/">Josei</a></dd>
<dd><a href="/genre/Game/">Game</a></dd>
<dd><a href="/genre/Martial+Arts/" class="a3">Martial Arts</a></dd>
<dd><a href="/genre/Mature/">Mature</a></dd>
<dd><a href="/genre/Mecha/">Mecha</a></dd>
<dd><a href="/genre/Mystery/">Mystery</a></dd>
<dd><a href="/genre/Psychological/">Psychological</a></dd>
</dl>
<dl class="d2">
<dd><a href="/genre/Romance/" class="a4">Romance</a></dd>
<dd><a href="/genre/School+Life/">School Life</a></dd>
<dd><a href="/genre/Sci-fi/">Sci-fi</a></dd>
<dd><a href="/genre/Seinen/">Seinen</a></dd>
<dd><a href="/genre/Shoujo/">Shoujo</a></dd>
<dd><a href="/genre/Shounen+Ai/">Shounen Ai</a></dd>
<dd><a href="/genre/Shounen/">Shounen</a></dd>
<dd><a href="/genre/Slice+of+Life/">Slice of Life</a></dd>
<dd><a href="/genre/Smut/">Smut</a></dd>
</dl>
<dl class="d2">
<dd><a href="/genre/Sports/">Sports</a></dd>
<dd><a href="/genre/Supernatural/" class="a5">Supernatural</a></dd>
<dd><a href="/genre/Tragedy/">Tragedy</a></dd>
<dd><a href="/genre/Wuxia/">Wuxia</a></dd>
<dd><a href="/genre/Xianxia/">Xianxia</a></dd>
<dd><a href="/genre/Xuanhuan/">Xuanhuan</a></dd>
<dd><a href="/genre/Yaoi/">Yaoi</a></dd>
</dl>
</div>
</li>
<script>
                        $('.ul-nav li').click(function(e) {
					        e.stopPropagation();
					        $(this).siblings().find('.m-dl').stop().hide();
					        $(this).find('.m-dl').stop().toggle();
					    })
					    $("body").click(function() {
					        $('.ul-nav li').find('.m-dl').stop().slideUp();
					    });
		                </script>
</ul>
<div class="light-switch ">
</div>
<div class="hdr">
<a href="/history/" class="reading" title="Your Reading Novels"></a>
<div class="soBox">
<form action="/search/" method="post" class="inp" id="form">
<input type="text" class="inp" id="searchkey" name="searchkey" placeholder="Search...">
<button type="submit" class="btn">
<span class="glyphicon glyphicon-search"></span>
</button>
</form>
</div>
</div>
<div class="nav-m">
<div class="light-switch ">
</div>
<a href="/history/" class="reading" title="Your Reading Novels"></a>
<span class="menuBtn"></span>
</div>
</div>
<script>
                $('.menuBtn').append('<b></b><b></b><b></b>');
			    $('.menuBtn').click(function(event) {
			        $(this).toggleClass('open');
			        $('.head-m').stop().slideToggle();
			    });
			    </script>
</div>
<div class="head-m">
<ul class="ul-nav TAB_CLICK" id=".m-taber">
<li>
<a href="javascript:;" class="v1">
<span class="glyphicon glyphicon-list"></span>
Novel list
<div class="caret"></div>
</a>
</li>
<li>
<a href="javascript:;" class="v1">
<span class="glyphicon glyphicon-list"></span>
Genres
<div class="caret"></div>
</a>
</li>
</ul>
<div class="m-taber">
<div class="m-dl">
<dl class="d1">
<dd><a href="/history/"><span class="glyphicon glyphicon-bookmark"></span>Your Reading Novels</a></dd>
<dd><a href="/latest-novel/"><span class="glyphicon glyphicon-edit"></span>Latest Novels</a></dd>
<dd><a href="/latest-release-novel/"><span class="glyphicon glyphicon-refresh"></span>Latest Release</a></dd>
<dd><a href="/most-popular-novel/"><span class="glyphicon glyphicon-fire"></span>Most Popular</a></dd>
<dd><a href="/completed-novel/"><span class="glyphicon glyphicon-check"></span>Completed Novels</a></dd>
</dl>
</div>
</div>
<div class="m-taber">
<div class="m-dl m-dl-1">
<dl class="d2">
<dd><a href="/genre/Action/" class="a1">Action</a></dd>
<dd><a href="/genre/Adult/">Adult</a></dd>
<dd><a href="/genre/Adventure/" class="a2">Adventure</a></dd>
<dd><a href="/genre/Comedy/">Comedy</a></dd>
<dd><a href="/genre/Drama/">Drama</a></dd>
<dd><a href="/genre/Ecchi/">Ecchi</a></dd>
<dd><a href="/genre/Fantasy/">Fantasy</a></dd>
<dd><a href="/genre/Gender+Bender/">Gender Bender</a></dd>
<dd><a href="/genre/Harem/">Harem</a></dd>
<dd><a href="/genre/Historical/">Historical</a></dd>
<dd><a href="/genre/Horror/">Horror</a></dd>
<dd><a href="/genre/Josei/">Josei</a></dd>
<dd><a href="/genre/Game/">Game</a></dd>
<dd><a href="/genre/Martial+Arts/" class="a3">Martial Arts</a></dd>
<dd><a href="/genre/Mature/">Mature</a></dd>
<dd><a href="/genre/Mecha/">Mecha</a></dd>
<dd><a href="/genre/Mystery/">Mystery</a></dd>
<dd><a href="/genre/Psychological/">Psychological</a></dd>
<dd><a href="/genre/Romance/" class="a4">Romance</a></dd>
<dd><a href="/genre/School+Life/">School Life</a></dd>
<dd><a href="/genre/Sci-fi/">Sci-fi</a></dd>
<dd><a href="/genre/Seinen/">Seinen</a></dd>
<dd><a href="/genre/Shoujo/">Shoujo</a></dd>
<dd><a href="/genre/Shounen+Ai/">Shounen Ai</a></dd>
<dd><a href="/genre/Shounen/">Shounen</a></dd>
<dd><a href="/genre/Slice+of+Life/">Slice of Life</a></dd>
<dd><a href="/genre/Smut/">Smut</a></dd>
<dd><a href="/genre/Sports/">Sports</a></dd>
<dd><a href="/genre/Supernatural/" class="a5">Supernatural</a></dd>
<dd><a href="/genre/Tragedy/">Tragedy</a></dd>
<dd><a href="/genre/Wuxia/">Wuxia</a></dd>
<dd><a href="/genre/Xianxia/">Xianxia</a></dd>
<dd><a href="/genre/Xuanhuan/">Xuanhuan</a></dd>
<dd><a href="/genre/Yaoi/">Yaoi</a></dd>
</dl>
</div>
</div>
<div class="soBox">
<form action="/search/" method="post" class="inp" id="m_form">
<input type="text" class="inp" id="m_searchkey" name="searchkey" placeholder="Search...">
<button type="submit" class="btn">
<span class="glyphicon glyphicon-search"></span>
</button>
</form>
</div>
</div>
</div> <div class="cur">
<div class="wp">
<a href="/" class="home" title="Read Novels Online Free"><span class="glyphicon glyphicon-home"></span> Home</a>
<i></i>
<a href="/latest-novels/" title="Latest Novels">Latest Novels</a>
</div>
</div>
</div>
<div class="main">
<div class="wp">
<div class="g-t2">
<h1 class="tit"><span class="glyphicon glyphicon-edit"></span> Latest Novels</h1>
</div>
<div class="row-box">
<div class="col-content">
<div class="ul-list1 ul-list1-2 ss-custom">
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/my-hermes-system.html">
<img src="https://freewebnovel.com/files/article/image/1/1452/1452s.jpg" alt="My Hermes System" title="My Hermes System">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/my-hermes-system.html" title="My Hermes System">My Hermes System</a></h3>
<div class="core">
<span>0.0</span>
<i style="background-image: url(/static/freewebnovel/images/00star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Other Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Fantasy/" class="novel" title="Fantasy Novels">Fantasy</a>, <a href="/genre/Tragedy/" class="novel" title="Tragedy Novels">Tragedy</a></div>
</div>
 <div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/my-hermes-system/chapter-332.html" class="chapter" title="Chapter 332 - 332: Enter Player Van"> <span class="s1">332 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/my-pick-up-artist-system-wn.html">
<img src="https://freewebnovel.com/files/article/image/1/1451/1451s.jpg" alt="My Pick Up Artist System" title="My Pick Up Artist System">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/my-pick-up-artist-system-wn.html" title="My Pick Up Artist System">My Pick Up Artist System</a></h3>
<div class="core">
<span>0.0</span>
<i style="background-image: url(/static/freewebnovel/images/00star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Other Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Comedy/" class="novel" title="Comedy Novels">Comedy</a>, <a href="/genre/Supernatural/" class="novel" title="Supernatural Novels">Supernatural</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/my-pick-up-artist-system-wn/chapter-337.html" class="chapter" title="Chapter 339 Post-workout meal"> <span class="s1">337 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/i-woke-up-piloting-the-strongest-starship-so-i-became-a-space-mercenary.html">
 <img src="https://freewebnovel.com/files/article/image/1/1450/1450s.jpg" alt="I Woke Up Piloting the Strongest Starship, so I Became a Space Mercenary" title="I Woke Up Piloting the Strongest Starship, so I Became a Space Mercenary">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/i-woke-up-piloting-the-strongest-starship-so-i-became-a-space-mercenary.html" title="I Woke Up Piloting the Strongest Starship, so I Became a Space Mercenary">I Woke Up Piloting the Strongest Starship, so I Became a Space Mercenary</a></h3>
<div class="core">
<span>5.0 </span>
<i style="background-image: url(/static/freewebnovel/images/50star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Japanese Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Action/" class="novel" title="Action Novels">Action</a>, <a href="/genre/Adventure/" class="novel" title="Adventure Novels">Adventure</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/i-woke-up-piloting-the-strongest-starship-so-i-became-a-space-mercenary/chapter-290.html" class="chapter" title="Chapter 285 – Combat Strength Analysis"> <span class="s1">290 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/my-father-is-a-hero-my-mother-is-a-spirit-the-daughter-me-is-a-reincarnator.html">
<img src="https://freewebnovel.com/files/article/image/1/1449/1449s.jpg" alt="My Father is a Hero, My Mother is a Spirit, the Daughter (Me) is a Reincarnator." title="My Father is a Hero, My Mother is a Spirit, the Daughter (Me) is a Reincarnator.">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/my-father-is-a-hero-my-mother-is-a-spirit-the-daughter-me-is-a-reincarnator.html" title="My Father is a Hero, My Mother is a Spirit, the Daughter (Me) is a Reincarnator.">My Father is a Hero, My Mother is a Spirit, the Daughter (Me) is a Reincarnator.</a></h3>
<div class="core">
<span>0.0</span>
<i style="background-image: url(/static/freewebnovel/images/00star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Japanese Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Comedy/" class="novel" title="Comedy Novels">Comedy</a>, <a href="/genre/Fantasy/" class="novel" title="Fantasy Novels">Fantasy</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/my-father-is-a-hero-my-mother-is-a-spirit-the-daughter-me-is-a-reincarnator/chapter-51.html" class="chapter" title="Chapter 50: Im not a Princess! 2"> <span class="s1">51 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/samsara-online.html">
<img src="https://freewebnovel.com/files/article/image/1/1448/1448s.jpg" alt="Samsara Online" title="Samsara Online">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/samsara-online.html" title="Samsara Online">Samsara Online</a></h3>
<div class="core">
<span>5.0 </span>
<i style="background-image: url(/static/freewebnovel/images/50star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Chinese Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Game/" class="novel" title="Game Novels">Game</a>, <a href="/genre/Harem/" class="novel" title="Harem Novels">Harem</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/samsara-online/chapter-449.html" class="chapter" title="Chapter 448 RIP Emperor"> <span class="s1">449 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/im-cultivating-immortality-while-everyone-else-practices-martial-arts.html">
<img src="https://freewebnovel.com/files/article/image/1/1447/1447s.jpg" alt="I'm Cultivating Immortality While Everyone Else Practices Martial Arts" title="I'm Cultivating Immortality While Everyone Else Practices Martial Arts">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/im-cultivating-immortality-while-everyone-else-practices-martial-arts.html" title="I'm Cultivating Immortality While Everyone Else Practices Martial Arts">I'm Cultivating Immortality While Everyone Else Practices Martial Arts</a></h3>
<div class="core">
<span>2.7 </span>
<i style="background-image: url(/static/freewebnovel/images/25star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Chinese Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Martial+Arts/" class="novel" title="Martial Arts Novels">Martial Arts</a>, <a href="/genre/Fantasy/" class="novel" title="Fantasy Novels">Fantasy</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/im-cultivating-immortality-while-everyone-else-practices-martial-arts/chapter-348.html" class="chapter" title="Chapter 348 - Returning To The Alps"> <span class="s1">348 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
 </div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/former-general-is-undead-knight.html">
<img src="https://freewebnovel.com/files/article/image/1/1446/1446s.jpg" alt="Former General Is Undead Knight" title="Former General Is Undead Knight">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/former-general-is-undead-knight.html" title="Former General Is Undead Knight">Former General Is Undead Knight</a></h3>
<div class="core">
<span>0.0</span>
<i style="background-image: url(/static/freewebnovel/images/00star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Japanese Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Action/" class="novel" title="Action Novels">Action</a>, <a href="/genre/Adventure/" class="novel" title="Adventure Novels">Adventure</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/former-general-is-undead-knight/chapter-88.html" class="chapter" title="Volume 2, Chapter 39: Feast of Revenant Dragon ?"> <span class="s1">88 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/demon-sword-maiden.html">
<img src="https://freewebnovel.com/files/article/image/1/1445/1445s.jpg" alt="Demon Sword Maiden" title="Demon Sword Maiden">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/demon-sword-maiden.html" title="Demon Sword Maiden">Demon Sword Maiden</a></h3>
<div class="core">
<span>0.0</span>
<i style="background-image: url(/static/freewebnovel/images/00star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Chinese Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Action/" class="novel" title="Action Novels">Action</a>, <a href="/genre/Ecchi/" class="novel" title="Ecchi Novels">Ecchi</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/demon-sword-maiden/chapter-467.html" class="chapter" title="Volume 4, Chapter 71 – Rain Drunk"> <span class="s1">467 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/tales-of-the-world-devouring-serpent.html">
<img src="https://freewebnovel.com/files/article/image/1/1444/1444s.jpg" alt="Tales Of The World Devouring Serpent" title="Tales Of The World Devouring Serpent">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/tales-of-the-world-devouring-serpent.html" title="Tales Of The World Devouring Serpent">Tales Of The World Devouring Serpent</a></h3>
<div class="core">
<span>4.0 </span>
<i style="background-image: url(/static/freewebnovel/images/40star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Chinese Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Action/" class="novel" title="Action Novels">Action</a>, <a href="/genre/Adventure/" class="novel" title="Adventure Novels">Adventure</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/tales-of-the-world-devouring-serpent/chapter-639.html" class="chapter" title="Chapter 600: Ouyang Xue (Part 1)"> <span class="s1">639 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/epic-side-story-dragon-ball.html">
<img src="https://freewebnovel.com/files/article/image/1/1443/1443s.jpg" alt="EPIC Side Story: Dragon Ball" title="EPIC Side Story: Dragon Ball">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/epic-side-story-dragon-ball.html" title="EPIC Side Story: Dragon Ball">EPIC Side Story: Dragon Ball</a></h3>
<div class="core">
<span>0.0</span>
<i style="background-image: url(/static/freewebnovel/images/00star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Other Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Action/" class="novel" title="Action Novels">Action</a>, <a href="/genre/Harem/" class="novel" title="Harem Novels">Harem</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/epic-side-story-dragon-ball/chapter-44.html" class="chapter" title="Chapter 44: Progress : Resolution"> <span class="s1">44 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/playing-with-other-supernaturals.html">
<img src="https://freewebnovel.com/files/article/image/1/1442/1442s.jpg" alt="Playing With Other Supernaturals" title="Playing With Other Supernaturals">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/playing-with-other-supernaturals.html" title="Playing With Other Supernaturals">Playing With Other Supernaturals</a></h3>
<div class="core">
<span>4.8 </span>
<i style="background-image: url(/static/freewebnovel/images/45star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Other Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Action/" class="novel" title="Action Novels">Action</a>, <a href="/genre/Comedy/" class="novel" title="Comedy Novels">Comedy</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/playing-with-other-supernaturals/chapter-630.html" class="chapter" title="Volume 10 Chapter 630 - Otherworldly Carriage part 2"> <span class="s1">630 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/reborn-as-a-dragon-girl-with-a-system-dragon-girl.html">
<img src="https://freewebnovel.com/files/article/image/1/1441/1441s.jpg" alt="Reborn As A Dragon Girl With A System Dragon Girl" title="Reborn As A Dragon Girl With A System Dragon Girl">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/reborn-as-a-dragon-girl-with-a-system-dragon-girl.html" title="Reborn As A Dragon Girl With A System Dragon Girl">Reborn As A Dragon Girl With A System Dragon Girl</a></h3>
<div class="core">
<span>4.9 </span>
<i style="background-image: url(/static/freewebnovel/images/45star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
 <span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Other Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Action/" class="novel" title="Action Novels">Action</a>, <a href="/genre/Adventure/" class="novel" title="Adventure Novels">Adventure</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/reborn-as-a-dragon-girl-with-a-system-dragon-girl/chapter-411.html" class="chapter" title="Chapter 411 - Star Hopper"> <span class="s1">411 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/extraordinary-player.html">
<img src="https://freewebnovel.com/files/article/image/1/1440/1440s.jpg" alt="Extraordinary Player" title="Extraordinary Player">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/extraordinary-player.html" title="Extraordinary Player">Extraordinary Player</a></h3>
<div class="core">
<span>0.0</span>
<i style="background-image: url(/static/freewebnovel/images/00star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Chinese Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Action/" class="novel" title="Action Novels">Action</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/extraordinary-player/chapter-50.html" class="chapter" title="Chapter 50: I Think I’ll Choose Money">  <span class="s1">50 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/legend-of-the-great-sage.html">
<img src="https://freewebnovel.com/files/article/image/1/1439/1439s.jpg" alt="Legend of the Great Sage" title="Legend of the Great Sage">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/legend-of-the-great-sage.html" title="Legend of the Great Sage">Legend of the Great Sage</a></h3>
<div class="core">
<span>5.0 </span>
<i style="background-image: url(/static/freewebnovel/images/50star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Chinese Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Action/" class="novel" title="Action Novels">Action</a>, <a href="/genre/Adventure/" class="novel" title="Adventure Novels">Adventure</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/legend-of-the-great-sage/chapter-1019.html" class="chapter" title="Chapter 1019 - Xiao An Emerges"> <span class="s1">1019 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/the-darkness-was-comfortable-for-me.html">
<img src="https://freewebnovel.com/files/article/image/1/1438/1438s.jpg" alt="The Darkness Was Comfortable for Me" title="The Darkness Was Comfortable for Me">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/the-darkness-was-comfortable-for-me.html" title="The Darkness Was Comfortable for Me">The Darkness Was Comfortable for Me</a></h3>
<div class="core">
<span>3.5 </span>
<i style="background-image: url(/static/freewebnovel/images/35star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Japanese Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Adventure/" class="novel" title="Adventure Novels">Adventure</a>, <a href="/genre/Fantasy/" class="novel" title="Fantasy Novels">Fantasy</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/the-darkness-was-comfortable-for-me/chapter-141.html" class="chapter" title="Chapter 141: Exclusive Chosen Bulletin Board JPN [No.1000 – Kurose Hikaru] 4444th"> <span class="s1">141 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/hidden-blade.html">
<img src="https://freewebnovel.com/files/article/image/1/1437/1437s.jpg" alt="Hidden Blade" title="Hidden Blade">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/hidden-blade.html" title="Hidden Blade">Hidden Blade</a></h3>
<div class="core">
<span>0.0</span>
<i style="background-image: url(/static/freewebnovel/images/00star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Chinese Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
 <div class="right"><a href="/genre/Fantasy/" class="novel" title="Fantasy Novels">Fantasy</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/hidden-blade/chapter-39.html" class="chapter" title="Chapter 39 On the Sunday of Fluorescent Insects, Ants Cross the Sea"> <span class="s1">39 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/i-was-caught-up-in-a-hero-summoning-but-that-world-is-at-peace.html">
<img src="https://freewebnovel.com/files/article/image/1/1436/1436s.jpg" alt="I Was Caught up in a Hero Summoning, but That World Is at Peace" title="I Was Caught up in a Hero Summoning, but That World Is at Peace">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/i-was-caught-up-in-a-hero-summoning-but-that-world-is-at-peace.html" title="I Was Caught up in a Hero Summoning, but That World Is at Peace">I Was Caught up in a Hero Summoning, but That World Is at Peace</a></h3>
<div class="core">
<span>4.3 </span>
<i style="background-image: url(/static/freewebnovel/images/40star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Japanese Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Comedy/" class="novel" title="Comedy Novels">Comedy</a>, <a href="/genre/Fantasy/" class="novel" title="Fantasy Novels">Fantasy</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/i-was-caught-up-in-a-hero-summoning-but-that-world-is-at-peace/chapter-691.html" class="chapter" title="Chapter 917 - Dragon Carnival ?"> <span class="s1">691 Chapters</a></span>
</div>
</div>
</div>
 </div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/the-mightiest-hero-of-black-my-party-members-betrayed-me-so-ill-stick-with-the-strongest-monster.html">
<img src="https://freewebnovel.com/files/article/image/1/1435/1435s.jpg" alt="The Mightiest Hero of Black ~My Party Members Betrayed Me so I'll Stick With The Strongest Monster~" title="The Mightiest Hero of Black ~My Party Members Betrayed Me so I'll Stick With The Strongest Monster~">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/the-mightiest-hero-of-black-my-party-members-betrayed-me-so-ill-stick-with-the-strongest-monster.html" title="The Mightiest Hero of Black ~My Party Members Betrayed Me so I'll Stick With The Strongest Monster~">The Mightiest Hero of Black ~My Party Members Betrayed Me so I'll Stick With The Strongest Monster~</a></h3>
<div class="core">
<span>0.0</span>
<i style="background-image: url(/static/freewebnovel/images/00star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Japanese Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Action/" class="novel" title="Action Novels">Action</a>, <a href="/genre/Adventure/" class="novel" title="Adventure Novels">Adventure</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/the-mightiest-hero-of-black-my-party-members-betrayed-me-so-ill-stick-with-the-strongest-monster/chapter-41.html" class="chapter" title="Chapter 41 /// Let’s Run! ///"> <span class="s1">41 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/the-emperor-wants-to-marry-the-doctor.html">
<img src="https://freewebnovel.com/files/article/image/1/1434/1434s.jpg" alt="The Emperor Wants To Marry The Doctor" title="The Emperor Wants To Marry The Doctor">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/the-emperor-wants-to-marry-the-doctor.html" title="The Emperor Wants To Marry The Doctor">The Emperor Wants To Marry The Doctor</a></h3>
<div class="core">
<span>5.0 </span>
<i style="background-image: url(/static/freewebnovel/images/50star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Chinese Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Historical/" class="novel" title="Historical Novels">Historical</a>, <a href="/genre/Josei/" class="novel" title="Josei Novels">Josei</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/the-emperor-wants-to-marry-the-doctor/chapter-696.html" class="chapter" title="Chapter 697: News"> <span class="s1">696 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="li-row">
<div class="li">
<div class="con">
<div class="pic">
<a href="/top-tier-providence-secretly-cultivate-for-a-thousand-years.html">
<img src="https://freewebnovel.com/files/article/image/1/1433/1433s.jpg" alt="Top Tier Providence, Secretly Cultivate for a Thousand Years" title="Top Tier Providence, Secretly Cultivate for a Thousand Years">
</a>
</div>
<div class="txt">
<h3 class="tit"><a href="/top-tier-providence-secretly-cultivate-for-a-thousand-years.html" title="Top Tier Providence, Secretly Cultivate for a Thousand Years">Top Tier Providence, Secretly Cultivate for a Thousand Years</a></h3>
<div class="core">
<span>4.0 </span>
<i style="background-image: url(/static/freewebnovel/images/40star.png); background-size: 100% 100%;"></i>
</div>
<div class="desc">
<div class="item">
<span class="glyphicon glyphicon-globe chi-tiet-icon"></span>
<div class="right">
<em class="e1">Chinese Novel</em>
</div>
</div>
<div class="item">
<span class="glyphicon glyphicon-th-list chi-tiet-icon"></span>
<div class="right"><a href="/genre/Action/" class="novel" title="Action Novels">Action</a>, <a href="/genre/Comedy/" class="novel" title="Comedy Novels">Comedy</a></div>
</div>
<div class="item">
<span class="big-image2-hide glyphicon glyphicon-book chi-tiet-icon"></span>
<div class="right">
<a href="/top-tier-providence-secretly-cultivate-for-a-thousand-years/chapter-176.html" class="chapter" title="Chapter 178 Mysterious Red Stone, The Stronger Han Jue"> <span class="s1">176 Chapters</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="pages">
<ul>
<li><a href="/latest-novel/1/">1</a><a href="javascript:void(0);">&lt;&lt;</a><strong>1</strong><a href="/latest-novel/2/">2</a><a href="/latest-novel/3/">3</a><a href="/latest-novel/4/">4</a><a href="/latest-novel/5/">5</a><a href="/latest-novel/6/">6</a><a href="/latest-novel/7/">7</a><a href="/latest-novel/8/">8</a><a href="/latest-novel/9/">9</a><a href="/latest-novel/10/">10</a><a href="/latest-novel/2/">&gt;&gt;</a><a href="/latest-novel/73/">73</a></li>
</ul>
</div>
</div>
<div class="col-slide">
<div class="m-newest m-newest-1">
<div class="col-l">
<div class="g-tit">
<h3 class="tit"><span class="glyphicon glyphicon-info-sign"></span> Latest Novels</h3>
</div>
<ul class="ul-list4">
<li>List of latest novels</li>
</ul>
</div>

<div class="col-r">
<div class="g-tit">
<h3 class="tit"><span class="glyphicon glyphicon-th-list"></span> Genres</h3>
</div>
<ul class="ul-list3">
<li class="l1">
<a href="/genre/Action/" class="con" title="Action Novels"><span class="glyphicon glyphicon-ok-sign"></span>Action</a>
</li>
<li>
<a href="/genre/Adult/" class="con" title="Adult Novels"><span class="glyphicon glyphicon-ok-sign"></span>Adult</a>
</li>
<li class="l2">
<a href="/genre/Adventure/" class="con" title="Adventure Novels"><span class="glyphicon glyphicon-ok-sign"></span>Adventure</a>
</li>
<li>
<a href="/genre/Comedy/" class="con" title="Comedy Novels"><span class="glyphicon glyphicon-ok-sign"></span>Comedy</a>
</li>
 <li>
<a href="/genre/Drama/" class="con" title="Drama Novels"><span class="glyphicon glyphicon-ok-sign"></span>Drama</a>
</li>
<li>
<a href="/genre/Ecchi/" class="con" title="Ecchi Novels"><span class="glyphicon glyphicon-ok-sign"></span>Ecchi</a>
</li>
<li class="l5">
<a href="/genre/Fantasy/" class="con" title="Fantasy Novels"><span class="glyphicon glyphicon-ok-sign"></span>Fantasy</a>
</li>
<li>
<a href="/genre/Gender+Bender/" class="con" title="Gender Bender Novels"><span class="glyphicon glyphicon-ok-sign"></span>Gender Bender</a>
</li>
<li>
<a href="/genre/Harem/" class="con" title="Harem Novels"><span class="glyphicon glyphicon-ok-sign"></span>Harem</a>
</li>
<li>
<a href="/genre/Historical/" class="con" title="Historical Novels"><span class="glyphicon glyphicon-ok-sign"></span>Historical</a>
</li>
<li>
<a href="/genre/Horror/" class="con" title="Horror Novels"><span class="glyphicon glyphicon-ok-sign"></span>Horror</a>
</li>
<li>
<a href="/genre/Josei/" class="con" title="HJosei Novels"><span class="glyphicon glyphicon-ok-sign"></span>Josei</a>
</li>
<li>
<a href="/genre/Game/" class="con" title="Game Novels"><span class="glyphicon glyphicon-ok-sign"></span>Game</a>
</li>
<li class="l3">
<a href="/genre/Martial+Arts/" class="con" title="Martial Arts Novels"><span class="glyphicon glyphicon-ok-sign"></span>Martial Arts</a>
</li>
<li>
<a href="/genre/Mature/" class="con" title="Mature Novels"><span class="glyphicon glyphicon-ok-sign"></span>Mature</a>
</li>
<li>
<a href="/genre/Mecha/" class="con" title="Mecha Novels"><span class="glyphicon glyphicon-ok-sign"></span>Mecha</a>
</li>
<li>
<a href="/genre/Mystery/" class="con" title="Mystery Novels"><span class="glyphicon glyphicon-ok-sign"></span>Mystery</a>
</li>
<li>
<a href="/genre/Psychological/" class="con" title="Psychological Novels"><span class="glyphicon glyphicon-ok-sign"></span>Psychological</a>
</li>
<li class="l4">
<a href="/genre/Romance/" class="con" title="Romance Novels"><span class="glyphicon glyphicon-ok-sign"></span>Romance</a>
</li>
<li>
<a href="/genre/School+Life/" class="con" title="School Life Novels"><span class="glyphicon glyphicon-ok-sign"></span>School Life</a>
</li>
<li>
<a href="/genre/Sci-fi/" class="con" title="Sci-fi Novels"><span class="glyphicon glyphicon-ok-sign"></span>Sci-fi</a>
</li>
<li>
<a href="/genre/Seinen/" class="con" title="Seinen Novels"><span class="glyphicon glyphicon-ok-sign"></span>Seinen</a>
</li>
<li>
<a href="/genre/Shoujo/" class="con" title="Shoujo Novels"><span class="glyphicon glyphicon-ok-sign"></span>Shoujo</a>
</li>
<li>
<a href="/genre/Shounen+Ai/" class="con" title="Shounen Ai Novels"><span class="glyphicon glyphicon-ok-sign"></span>Shounen Ai</a>
</li>
<li>
<a href="/genre/Shounen/" class="con" title="Shounen Novels"><span class="glyphicon glyphicon-ok-sign"></span>Shounen</a>
</li>
<li>
<a href="/genre/Slice+of+Life/" class="con" title="Slice of Life Novels"><span class="glyphicon glyphicon-ok-sign"></span>Slice of Life</a>
</li>
<li>
<a href="/genre/Smut/" class="con" title="Smut Novels"><span class="glyphicon glyphicon-ok-sign"></span>Smut</a>
</li>
<li>
<a href="/genre/Sports/" class="con" title="Sports Novels"><span class="glyphicon glyphicon-ok-sign"></span>Sports</a>
</li>
<li class="l5">
<a href="/genre/Supernatural/" class="con" title="Supernatural Novels"><span class="glyphicon glyphicon-ok-sign"></span>Supernatural</a>
</li>
<li>
<a href="/genre/Tragedy/" class="con" title="Tragedy Novels"><span class="glyphicon glyphicon-ok-sign"></span>Tragedy</a>
</li>
<li>
<a href="/genre/Wuxia/" class="con" title="Wuxia Novels"><span class="glyphicon glyphicon-ok-sign"></span>Wuxia</a>
</li>
<li class="l2">
<a href="/genre/Xianxia/" class="con" title="Xianxia Novels"><span class="glyphicon glyphicon-ok-sign"></span>Xianxia</a>
</li>
<li>
<a href="/genre/Xuanhuan/" class="con" title="Xuanhuan Novels"><span class="glyphicon glyphicon-ok-sign"></span>Xuanhuan</a>
</li>
<li>
<a href="/genre/Yaoi/" class="con" title="Yaoi Novels"><span class="glyphicon glyphicon-ok-sign"></span>Yaoi</a>
</li>
</ul>
</div>
 <div class="col-l">
<div class="g-tit">
<h3 class="tit"><span class="glyphicon glyphicon-fire"></span> Hot Latest Novels</h3>
</div>
<ul class="ul-list6">
<li>
<div class="pic">
<img src="https://freewebnovel.com/files/article/image/1/1358/1358s.jpg" alt="I'm Actually a Cultivation Bigshot" title="I'm Actually a Cultivation Bigshot">
</div>
<div class="txt">
<h3 class="tit">
<div class="item">
<span class="s1">HOT</span> <span class="s2">NEW</span>  
</div>
<a href="/im-actually-a-cultivation-bigshot.html" class="con" title="I'm Actually a Cultivation Bigshot">I'm Actually a Cultivation Bigshot</a>
</h3>
<div class="chitiet">
<span class="s2">
<a href="/genre/Comedy/" title="Comedy Novels">Comedy</a>, <a href="/genre/Fantasy/" title="Fantasy Novels">Fantasy</a> </span>
<span class="s3">503 Chapters</span>
</div>
</div>
</li>
<li>
<div class="pic">
<img src="https://freewebnovel.com/files/article/image/1/1394/1394s.jpg" alt="Seirei Gensouki ~Konna Sekai de Deaeta Kimi ni~" title="Seirei Gensouki ~Konna Sekai de Deaeta Kimi ni~">
</div>
<div class="txt">
<h3 class="tit">
<div class="item">
<span class="s1">HOT</span> <span class="s2">NEW</span> 
</div>
<a href="/seirei-gensouki-konna-sekai-de-deaeta-kimi-ni.html" class="con" title="Seirei Gensouki ~Konna Sekai de Deaeta Kimi ni~">Seirei Gensouki ~Konna Sekai de Deaeta Kimi ni~</a>
</h3>
<div class="chitiet">
<span class="s2">
<a href="/genre/Action/" title="Action Novels">Action</a>, <a href="/genre/Adventure/" title="Adventure Novels">Adventure</a> </span>
<span class="s3">229 Chapters</span>
</div>
</div>
</li>
<li>
<div class="pic">
<img src="https://freewebnovel.com/files/article/image/1/1360/1360s.jpg" alt="The Mysterious Heiress: Researcher In Disguise" title="The Mysterious Heiress: Researcher In Disguise">
</div>
<div class="txt">
<h3 class="tit">
<div class="item">
<span class="s2">NEW</span> 
</div>
<a href="/the-mysterious-heiress-researcher-in-disguise.html" class="con" title="The Mysterious Heiress: Researcher In Disguise">The Mysterious Heiress: Researcher In Disguise</a>
</h3>
<div class="chitiet">
<span class="s2">
<a href="/genre/Drama/" title="Drama Novels">Drama</a>, <a href="/genre/Romance/" title="Romance Novels">Romance</a> </span>
<span class="s3">507 Chapters</span>
</div>
</div>
</li>
<li>
<div class="pic">
<img src="https://freewebnovel.com/files/article/image/1/1390/1390s.jpg" alt="The Formidable Son-In-Law: The Charismatic Lucas Gray" title="The Formidable Son-In-Law: The Charismatic Lucas Gray">
</div>
<div class="txt">
<h3 class="tit">
<div class="item">
<span class="s2">NEW</span> 
</div>
<a href="/the-formidable-son-in-law-the-charismatic-lucas-gray.html" class="con" title="The Formidable Son-In-Law: The Charismatic Lucas Gray">The Formidable Son-In-Law: The Charismatic Lucas Gray</a>
</h3>
<div class="chitiet">
<span class="s2">
<a href="/genre/Fantasy/" title="Fantasy Novels">Fantasy</a>, <a href="/genre/Xuanhuan/" title="Xuanhuan Novels">Xuanhuan</a> </span>
<span class="s3">346 Chapters</span>
</div>
</div>
</li>
<li>
<div class="pic">
<img src="https://freewebnovel.com/files/article/image/1/1379/1379s.jpg" alt="Transmigrated As My Former Uncle's Sweetheart" title="Transmigrated As My Former Uncle's Sweetheart">
</div>
<div class="txt">
<h3 class="tit">
<div class="item">
<span class="s2">NEW</span> 
</div>
<a href="/transmigrated-as-my-former-uncles-sweetheart.html" class="con" title="Transmigrated As My Former Uncle's Sweetheart">Transmigrated As My Former Uncle's Sweetheart</a>
</h3>
<div class="chitiet">
<span class="s2">
<a href="/genre/Fantasy/" title="Fantasy Novels">Fantasy</a>, <a href="/genre/Historical/" title="Historical Novels">Historical</a> </span>
<span class="s3">407 Chapters</span>
</div>
</div>
</li>
<li>
<div class="pic">
<img src="https://freewebnovel.com/files/article/image/1/1357/1357s.jpg" alt="Rebirth: Pampered Wife's Counterattack" title="Rebirth: Pampered Wife's Counterattack">
</div>
<div class="txt">
<h3 class="tit">
<div class="item">
<span class="s2">NEW</span> 
</div>
<a href="/rebirth-pampered-wifes-counterattack.html" class="con" title="Rebirth: Pampered Wife's Counterattack">Rebirth: Pampered Wife's Counterattack</a>
 </h3>
<div class="chitiet">
<span class="s2">
<a href="/genre/Fantasy/" title="Fantasy Novels">Fantasy</a>, <a href="/genre/Josei/" title="Josei Novels">Josei</a> </span>
<span class="s3">450 Chapters</span>
</div>
</div>
</li>
<li>
<div class="pic">
<img src="https://freewebnovel.com/files/article/image/1/1353/1353s.jpg" alt="Madam Is A Sensational Figure In The City" title="Madam Is A Sensational Figure In The City">
</div>
<div class="txt">
<h3 class="tit">
<div class="item">
<span class="s2">NEW</span> 
</div>
<a href="/madam-is-a-sensational-figure-in-the-city.html" class="con" title="Madam Is A Sensational Figure In The City">Madam Is A Sensational Figure In The City</a>
</h3>
<div class="chitiet">
<span class="s2">
<a href="/genre/Comedy/" title="Comedy Novels">Comedy</a>, <a href="/genre/Drama/" title="Drama Novels">Drama</a> </span>
<span class="s3">522 Chapters</span>
</div>
</div>
</li>
<li>
<div class="pic">
<img src="https://freewebnovel.com/files/article/image/1/1388/1388s.jpg" alt="Madam's Identities Shocks the Entire City Again" title="Madam's Identities Shocks the Entire City Again">
</div>
<div class="txt">
<h3 class="tit">
<div class="item">
<span class="s2">NEW</span> 
</div>
<a href="/madams-identities-shocks-the-entire-city-again.html" class="con" title="Madam's Identities Shocks the Entire City Again">Madam's Identities Shocks the Entire City Again</a>
</h3>
<div class="chitiet">
<span class="s2">
<a href="/genre/Romance/" title="Romance Novels">Romance</a>, <a href="/genre/School+Life/" title="School Life Novels">School Life</a> </span>
<span class="s3">317 Chapters</span>
</div>
</div>
</li>
<li>
<div class="pic">
<img src="https://freewebnovel.com/files/article/image/1/1381/1381s.jpg" alt="My Special Ability is Perfect Replication" title="My Special Ability is Perfect Replication">
</div>
<div class="txt">
 <h3 class="tit">
<div class="item">
<span class="s2">NEW</span> 
</div>
<a href="/my-special-ability-is-perfect-replication.html" class="con" title="My Special Ability is Perfect Replication">My Special Ability is Perfect Replication</a>
</h3>
<div class="chitiet">
<span class="s2">
<a href="/genre/Action/" title="Action Novels">Action</a>, <a href="/genre/Fantasy/" title="Fantasy Novels">Fantasy</a> </span>
<span class="s3">361 Chapters</span>
</div>
</div>
</li>
<li>
<div class="pic">
<img src="https://freewebnovel.com/files/article/image/1/1356/1356s.jpg" alt="Forging The Path To Godliness" title="Forging The Path To Godliness">
</div>
<div class="txt">
<h3 class="tit">
<div class="item">
<span class="s2">NEW</span> 
</div>
<a href="/forging-the-path-to-godliness.html" class="con" title="Forging The Path To Godliness">Forging The Path To Godliness</a>
</h3>
<div class="chitiet">
<span class="s2">
<a href="/genre/Fantasy/" title="Fantasy Novels">Fantasy</a> </span>
<span class="s3">200 Chapters</span>
</div>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
<a href="javascript:;" id="goTop">
<span class="glyphicon glyphicon-circle-arrow-up"></span>
</a>
</div>
</div>
<div class="footer">
<div class="wp">
<div class="ll">
<a href="https://freewebnovel.com" title="Free Webnovel">FreeWebnovel.Com</a><br>Read Books Online & Free Novels Online
</div>
<div class="rr">
<a href="/contact.html" title="Contact us">Contact</a> - <a href="https://freewebnovel.com/sitemap.xml" title="Sitemap" target="_blank">Sitemap</a>
<br><a href="/privacy-terms-of-use.html" title="Privacy & Terms of use"> Privacy & Terms of use</a>
</div>
</div>
</div>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-193159282-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-193159282-1');
</script><script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"rayId":"694cf6a5b93c3c94","token":"3dfd337b6d8847e985544a8c990b61b1","version":"2021.8.1","si":10}'></script>
</body></html>`;
