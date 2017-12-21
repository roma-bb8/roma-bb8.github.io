function t190_scrollToTop() {
    $('html, body').animate({scrollTop: 0}, 700);
}

function t228_highlight() {
    var url = window.location.href;
    var pathname = window.location.pathname;
    if (url.substr(url.length - 1) == "/") {
        url = url.slice(0, -1);
    }
    if (pathname.substr(pathname.length - 1) == "/") {
        pathname = pathname.slice(0, -1);
    }
    if (pathname.charAt(0) == "/") {
        pathname = pathname.slice(1);
    }
    if (pathname == "") {
        pathname = "/";
    }
    $(".t228__list_item a[href='" + url + "']").addClass("t-active");
    $(".t228__list_item a[href='" + url + "/']").addClass("t-active");
    $(".t228__list_item a[href='" + pathname + "']").addClass("t-active");
    $(".t228__list_item a[href='/" + pathname + "']").addClass("t-active");
    $(".t228__list_item a[href='" + pathname + "/']").addClass("t-active");
    $(".t228__list_item a[href='/" + pathname + "/']").addClass("t-active");
}

function t228_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var t228_navLinks = $("#rec" + recid + " .t228__list_item a:not(.tooltipstered)[href*='#']");
        if (t228_navLinks.length > 0) {
            setTimeout(function () {
                t228_catchScroll(t228_navLinks);
            }, 500);
        }
    }
}

function t228_catchScroll(t228_navLinks) {
    var t228_clickedSectionId = null,
        t228_sections = new Array(),
        t228_sectionIdTonavigationLink = [],
        t228_interval = 100,
        t228_lastCall, t228_timeoutId;
    t228_navLinks = $(t228_navLinks.get().reverse());
    t228_navLinks.each(function () {
        var t228_cursection = t228_getSectionByHref($(this));
        if (typeof t228_cursection.attr("id") != "undefined") {
            t228_sections.push(t228_cursection);
        }
        t228_sectionIdTonavigationLink[t228_cursection.attr("id")] = $(this);
    });
    t228_updateSectionsOffsets(t228_sections);
    t228_sections.sort(function (a, b) {
        return b.attr("data-offset-top") - a.attr("data-offset-top");
    });
    $(window).bind('resize', t_throttle(function () {
        t228_updateSectionsOffsets(t228_sections);
    }, 200));
    $('.t228').bind('displayChanged', function () {
        t228_updateSectionsOffsets(t228_sections);
    });
    setInterval(function () {
        t228_updateSectionsOffsets(t228_sections);
    }, 5000);
    t228_highlightNavLinks(t228_navLinks, t228_sections, t228_sectionIdTonavigationLink, t228_clickedSectionId);

    t228_navLinks.click(function () {
        var t228_clickedSection = t228_getSectionByHref($(this));
        if (!$(this).hasClass("tooltipstered") && typeof t228_clickedSection.attr("id") != "undefined") {
            t228_navLinks.removeClass('t-active');
            $(this).addClass('t-active');
            t228_clickedSectionId = t228_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function () {
        var t228_now = new Date().getTime();
        if (t228_lastCall && t228_now < (t228_lastCall + t228_interval)) {
            clearTimeout(t228_timeoutId);
            t228_timeoutId = setTimeout(function () {
                t228_lastCall = t228_now;
                t228_clickedSectionId = t228_highlightNavLinks(t228_navLinks, t228_sections, t228_sectionIdTonavigationLink, t228_clickedSectionId);
            }, t228_interval - (t228_now - t228_lastCall));
        } else {
            t228_lastCall = t228_now;
            t228_clickedSectionId = t228_highlightNavLinks(t228_navLinks, t228_sections, t228_sectionIdTonavigationLink, t228_clickedSectionId);
        }
    });
}


function t228_updateSectionsOffsets(sections) {
    $(sections).each(function () {
        var t228_curSection = $(this);
        t228_curSection.attr("data-offset-top", t228_curSection.offset().top);
    });
}


function t228_getSectionByHref(curlink) {
    var t228_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
    if (t228_curLinkValue[0] == '/') {
        t228_curLinkValue = t228_curLinkValue.substring(1);
    }
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + t228_curLinkValue.substring(1) + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + t228_curLinkValue.substring(1) + "']");
    }
}

function t228_highlightNavLinks(t228_navLinks, t228_sections, t228_sectionIdTonavigationLink, t228_clickedSectionId) {
    var t228_scrollPosition = $(window).scrollTop(),
        t228_valueToReturn = t228_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (t228_sections.length != 0 && t228_clickedSectionId == null && t228_sections[t228_sections.length - 1].attr("data-offset-top") > (t228_scrollPosition + 300)) {
        t228_navLinks.removeClass('t-active');
        return null;
    }

    $(t228_sections).each(function (e) {
        var t228_curSection = $(this),
            t228_sectionTop = t228_curSection.attr("data-offset-top"),
            t228_id = t228_curSection.attr('id'),
            t228_navLink = t228_sectionIdTonavigationLink[t228_id];
        if (((t228_scrollPosition + 300) >= t228_sectionTop) || (t228_sections[0].attr("id") == t228_id && t228_scrollPosition >= $(document).height() - $(window).height())) {
            if (t228_clickedSectionId == null && !t228_navLink.hasClass('t-active')) {
                t228_navLinks.removeClass('t-active');
                t228_navLink.addClass('t-active');
                t228_valueToReturn = null;
            } else {
                if (t228_clickedSectionId != null && t228_id == t228_clickedSectionId) {
                    t228_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t228_valueToReturn;
}

function t228_setPath() {
}

function t228_setWidth(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t228").each(function () {
            var el = $(this);
            var left_exist = el.find('.t228__leftcontainer').length;
            var left_w = el.find('.t228__leftcontainer').outerWidth(true);
            var max_w = left_w;
            var right_exist = el.find('.t228__rightcontainer').length;
            var right_w = el.find('.t228__rightcontainer').outerWidth(true);
            var items_align = el.attr('data-menu-items-align');
            if (left_w < right_w) max_w = right_w;
            max_w = Math.ceil(max_w);
            var center_w = 0;
            el.find('.t228__centercontainer').find('li').each(function () {
                center_w += $(this).outerWidth(true);
            });
            var padd_w = 40;
            var maincontainer_width = el.find(".t228__maincontainer").outerWidth(true);
            if (maincontainer_width - max_w * 2 - padd_w * 2 > center_w + 20) {
                //if(left_exist>0 && right_exist>0){
                if (items_align == "center" || typeof items_align === "undefined") {
                    el.find(".t228__leftside").css("min-width", max_w + "px");
                    el.find(".t228__rightside").css("min-width", max_w + "px");
                    el.find(".t228__list").removeClass("t228__list_hidden");
                }
            } else {
                el.find(".t228__leftside").css("min-width", "");
                el.find(".t228__rightside").css("min-width", "");

            }
        });
    }
}

function t228_setBg(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t228").each(function () {
            var el = $(this);
            if (el.attr('data-bgcolor-setbyscript') == "yes") {
                var bgcolor = el.attr("data-bgcolor-rgba");
                el.css("background-color", bgcolor);
            }
        });
    } else {
        $(".t228").each(function () {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-hex");
            el.css("background-color", bgcolor);
            el.attr("data-bgcolor-setbyscript", "yes");
        });
    }
}

function t228_appearMenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t228").each(function () {
            var el = $(this);
            var appearoffset = el.attr("data-appearoffset");
            if (appearoffset != "") {
                if (appearoffset.indexOf('vh') > -1) {
                    appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                }

                appearoffset = parseInt(appearoffset, 10);

                if ($(window).scrollTop() >= appearoffset) {
                    if (el.css('visibility') == 'hidden') {
                        el.finish();
                        el.css("top", "-50px");
                        el.css("visibility", "visible");
                        var topoffset = el.data('top-offset');
                        if (topoffset && parseInt(topoffset) > 0) {
                            el.animate({"opacity": "1", "top": topoffset + "px"}, 200, function () {
                            });

                        } else {
                            el.animate({"opacity": "1", "top": "0px"}, 200, function () {
                            });
                        }
                    }
                } else {
                    el.stop();
                    el.css("visibility", "hidden");
                    el.css("opacity", "0");
                }
            }
        });
    }

}

function t228_changebgopacitymenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t228").each(function () {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-rgba");
            var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
            var bgopacityone = el.attr("data-bgopacity");
            var bgopacitytwo = el.attr("data-bgopacity-two");
            var menushadow = el.attr("data-menushadow");
            if (menushadow == '100') {
                var menushadowvalue = menushadow;
            } else {
                var menushadowvalue = '0.' + menushadow;
            }
            if ($(window).scrollTop() > 20) {
                el.css("background-color", bgcolor_afterscroll);
                if (bgopacitytwo == '0' || (typeof menushadow == "undefined" && menushadow == false)) {
                    el.css("box-shadow", "none");
                } else {
                    el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")");
                }
            } else {
                el.css("background-color", bgcolor);
                if (bgopacityone == '0.0' || (typeof menushadow == "undefined" && menushadow == false)) {
                    el.css("box-shadow", "none");
                } else {
                    el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")");
                }
            }
        });
    }
}

function t228_createMobileMenu(recid) {
    var window_width = $(window).width(),
        el = $("#rec" + recid),
        menu = el.find(".t228"),
        burger = el.find(".t228__mobile");
    burger.click(function (e) {
        menu.fadeToggle(300);
        $(this).toggleClass("t228_opened")
    })
    $(window).bind('resize', t_throttle(function () {
        window_width = $(window).width();
        if (window_width > 980) {
            menu.fadeIn(0);
        }
    }, 200));
}


function t300_init() {
    $(".t300").each(function () {
        var $hook = $(this).attr('data-tooltip-hook'),
            $recid = $(this).attr('data-tooltip-id');
        if ($hook !== '') {
            var $obj = $('a[href*="' + $hook + '"]');
            var $content = $(this).find('.t300__content').html();
            if ($hook.charAt(0) == '#') {
                var touchDevices = true;
            } else {
                var touchDevices = false;
            }
            var position = $(this).attr('data-tooltip-position');
            if (position !== '') {
            } else {
                position = 'top';
            }
            $obj.tooltipster({
                'theme': 't300__tooltipster-noir t300__tooltipster-noir_' + $recid + '',
                'contentAsHTML': true,
                'content': $content,
                interactive: true,
                touchDevices: touchDevices,
                position: position
            });
        }
    });
}

$(document).ready(function () {
    t300_init();
    setTimeout(function () {
        t300_init();
    }, 500)
});

function t446_setLogoPadding(recid) {
    if ($(window).width() > 980) {
        var t446__menu = $('#rec' + recid + ' .t446');
        var t446__logo = t446__menu.find('.t446__logowrapper');
        var t446__leftpart = t446__menu.find('.t446__leftwrapper');
        var t446__rightpart = t446__menu.find('.t446__rightwrapper');
        t446__leftpart.css("padding-right", t446__logo.width() / 2 + 50);
        t446__rightpart.css("padding-left", t446__logo.width() / 2 + 50);
    }
}

function t446_checkOverflow(recid, menuheight) {
    var t446__menu = $('#rec' + recid + ' .t446');
    var t446__rightwr = t446__menu.find('.t446__rightwrapper');
    var t446__rightmenuwr = t446__rightwr.find('.t446__rightmenuwrapper');
    var t446__rightadditionalwr = t446__rightwr.find('.t446__additionalwrapper');
    var t446__burgeroverflow = t446__rightwr.find('.t446__burgerwrapper_overflow');
    var t446__burgerwithoutoverflow = t446__rightwr.find('.t446__burgerwrapper_withoutoverflow');

    if (menuheight > 0) {
        var t446__height = menuheight;
    } else {
        var t446__height = 80;
    }

    if ($(window).width() > 980 && (t446__rightmenuwr.width() + t446__rightadditionalwr.width()) > t446__rightwr.width()) {
        t446__menu.css("height", t446__height * 2);
        t446__rightadditionalwr.css("float", "right");

        t446__burgeroverflow.css("display", "table-cell");
        t446__burgerwithoutoverflow.css("display", "none");
    } else {
        if (t446__menu.height() > t446__height) {
            t446__menu.css("height", t446__height);
        }
        if (t446__rightadditionalwr.css("float") == "right") {
            t446__rightadditionalwr.css("float", "none");
        }

        t446__burgeroverflow.css("display", "none");
        t446__burgerwithoutoverflow.css("display", "table-cell");
    }
}

function t446_highlight() {
    var url = window.location.href;
    var pathname = window.location.pathname;
    if (url.substr(url.length - 1) == "/") {
        url = url.slice(0, -1);
    }
    if (pathname.substr(pathname.length - 1) == "/") {
        pathname = pathname.slice(0, -1);
    }
    if (pathname.charAt(0) == "/") {
        pathname = pathname.slice(1);
    }
    if (pathname == "") {
        pathname = "/";
    }
    $(".t446__list_item a[href='" + url + "']").addClass("t-active");
    $(".t446__list_item a[href='" + url + "/']").addClass("t-active");
    $(".t446__list_item a[href='" + pathname + "']").addClass("t-active");
    $(".t446__list_item a[href='/" + pathname + "']").addClass("t-active");
    $(".t446__list_item a[href='" + pathname + "/']").addClass("t-active");
    $(".t446__list_item a[href='/" + pathname + "/']").addClass("t-active");
}

function t446_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var t446_navLinks = $("#rec" + recid + " .t446__list_item a:not(.tooltipstered)[href*='#']");
        if (t446_navLinks.length > 0) {
            t446_catchScroll(t446_navLinks);
        }
    }
}

function t446_catchScroll(t446_navLinks) {
    var t446_clickedSectionId = null,
        t446_sections = new Array(),
        t446_sectionIdTonavigationLink = [],
        t446_interval = 100,
        t446_lastCall, t446_timeoutId;
    t446_navLinks = $(t446_navLinks.get().reverse());
    t446_navLinks.each(function () {
        var t446_cursection = t446_getSectionByHref($(this));
        if (typeof t446_cursection.attr("id") != "undefined") {
            t446_sections.push(t446_cursection);
        }
        t446_sectionIdTonavigationLink[t446_cursection.attr("id")] = $(this);
    });
    t446_updateSectionsOffsets(t446_sections);
    t446_sections.sort(function (a, b) {
        return b.attr("data-offset-top") - a.attr("data-offset-top");
    });
    $(window).bind('resize', t_throttle(function () {
        t446_updateSectionsOffsets(t446_sections);
    }, 200));
    $('.t446').bind('displayChanged', function () {
        t446_updateSectionsOffsets(t446_sections);
    });
    setInterval(function () {
        t446_updateSectionsOffsets(t446_sections);
    }, 5000);
    t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId);

    t446_navLinks.click(function () {
        var t446_clickedSection = t446_getSectionByHref($(this));
        if (!$(this).hasClass("tooltipstered") && typeof t446_clickedSection.attr("id") != "undefined") {
            t446_navLinks.removeClass('t-active');
            $(this).addClass('t-active');
            t446_clickedSectionId = t446_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function () {
        var t446_now = new Date().getTime();
        if (t446_lastCall && t446_now < (t446_lastCall + t446_interval)) {
            clearTimeout(t446_timeoutId);
            t446_timeoutId = setTimeout(function () {
                t446_lastCall = t446_now;
                t446_clickedSectionId = t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId);
            }, t446_interval - (t446_now - t446_lastCall));
        } else {
            t446_lastCall = t446_now;
            t446_clickedSectionId = t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId);
        }
    });
}


function t446_updateSectionsOffsets(sections) {
    $(sections).each(function () {
        var t446_curSection = $(this);
        t446_curSection.attr("data-offset-top", t446_curSection.offset().top);
    });
}


function t446_getSectionByHref(curlink) {
    var t446_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
    if (t446_curLinkValue[0] == '/') {
        t446_curLinkValue = t446_curLinkValue.substring(1);
    }
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + t446_curLinkValue.substring(1) + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + t446_curLinkValue.substring(1) + "']");
    }
}

function t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId) {
    var t446_scrollPosition = $(window).scrollTop(),
        t446_valueToReturn = t446_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (t446_sections.length != 0 && t446_clickedSectionId == null && t446_sections[t446_sections.length - 1].attr("data-offset-top") > (t446_scrollPosition + 300)) {
        t446_navLinks.removeClass('t-active');
        return null;
    }

    $(t446_sections).each(function (e) {
        var t446_curSection = $(this),
            t446_sectionTop = t446_curSection.attr("data-offset-top"),
            t446_id = t446_curSection.attr('id'),
            t446_navLink = t446_sectionIdTonavigationLink[t446_id];
        if (((t446_scrollPosition + 300) >= t446_sectionTop) || (t446_sections[0].attr("id") == t446_id && t446_scrollPosition >= $(document).height() - $(window).height())) {
            if (t446_clickedSectionId == null && !t446_navLink.hasClass('t-active')) {
                t446_navLinks.removeClass('t-active');
                t446_navLink.addClass('t-active');
                t446_valueToReturn = null;
            } else {
                if (t446_clickedSectionId != null && t446_id == t446_clickedSectionId) {
                    t446_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t446_valueToReturn;
}

function t446_setPath() {
}

function t446_setBg(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t446").each(function () {
            var el = $(this);
            if (el.attr('data-bgcolor-setbyscript') == "yes") {
                var bgcolor = el.attr("data-bgcolor-rgba");
                el.css("background-color", bgcolor);
            }
        });
    } else {
        $(".t446").each(function () {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-hex");
            el.css("background-color", bgcolor);
            el.attr("data-bgcolor-setbyscript", "yes");
        });
    }
}

function t446_appearMenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t446").each(function () {
            var el = $(this);
            var appearoffset = el.attr("data-appearoffset");
            if (appearoffset != "") {
                if (appearoffset.indexOf('vh') > -1) {
                    appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                }

                appearoffset = parseInt(appearoffset, 10);

                if ($(window).scrollTop() >= appearoffset) {
                    if (el.css('visibility') == 'hidden') {
                        el.finish();
                        el.css("top", "-50px");
                        el.css("visibility", "visible");
                        el.animate({"opacity": "1", "top": "0px"}, 200, function () {
                        });
                    }
                } else {
                    el.stop();
                    el.css("visibility", "hidden");
                }
            }
        });
    }

}

function t446_changebgopacitymenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t446").each(function () {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-rgba");
            var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
            var bgopacityone = el.attr("data-bgopacity");
            var bgopacitytwo = el.attr("data-bgopacity-two");
            var menushadow = el.attr("data-menushadow");
            if (menushadow == '100') {
                var menushadowvalue = menushadow;
            } else {
                var menushadowvalue = '0.' + menushadow;
            }
            if ($(window).scrollTop() > 20) {
                el.css("background-color", bgcolor_afterscroll);
                if (bgopacitytwo == '0' || menushadow == ' ') {
                    el.css("box-shadow", "none");
                } else {
                    el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")");
                }
            } else {
                el.css("background-color", bgcolor);
                if (bgopacityone == '0.0' || menushadow == ' ') {
                    el.css("box-shadow", "none");
                } else {
                    el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")");
                }
            }
        });
    }
}

function t446_createMobileMenu(recid) {
    var window_width = $(window).width(),
        el = $("#rec" + recid),
        menu = el.find(".t446"),
        burger = el.find(".t446__mobile");
    burger.click(function (e) {
        menu.fadeToggle(300);
        $(this).toggleClass("t446_opened")
    })
    $(window).bind('resize', t_throttle(function () {
        window_width = $(window).width();
        if (window_width > 980) {
            menu.fadeIn(0);
        }
    }, 200));
}

function t509_setHeight(recid) {
    var t509__el = $("#rec" + recid);
    var t509__image = t509__el.find(".t509__blockimg");
    t509__image.each(function () {
        var t509__width = $(this).attr("data-image-width");
        var t509__height = $(this).attr("data-image-height");
        var t509__ratio = t509__height / t509__width;
        var t509__padding = t509__ratio * 100;
        $(this).css("padding-bottom", t509__padding + "%");
    });

    if ($(window).width() > 960) {
        var t509__textwr = t509__el.find(".t509__textwrapper");
        var t509__deskimg = t509__el.find(".t509__desktopimg");
        t509__textwr.each(function () {
            $(this).css("height", t509__deskimg.innerHeight());
        });
    }
}

function t570_init(recid) {
    if ($(window).width() > 750) {
        t570_setMapHeight(recid);

        $(window).load(function () {
            t570_setMapHeight(recid);
        });

        $(window).resize(function () {
            t570_setMapHeight(recid);
        });
    }
}

function t570_setMapHeight(recid) {
    var t570__el = $('#rec' + recid),
        t570__map = t570__el.find('.t-map');
    var t570__textwrapper = t570__el.find('.t570__col_text').height();
    t570__map.css('height', t570__textwrapper).trigger('sizechange');
}

function t576_init(recid) {
    var el = $('#rec' + recid),
        line = el.find('.t576__line'),
        cirqle = el.find('.t576__cicqle'),
        block = el.find('.t576__item'),
        t576_resize;

    block.each(function () {
        $(this).find('.t576__circle').css('top', $(this).find('.t576__img').outerHeight() + 15);
    });

    $('.t576__item:first-child').find('.t576__line').css('top', $('.t576__item:first-child').find('.t576__img').outerHeight() + 15);

    $('.t576__item:last-child').find('.t576__line').css('height', $('.t576__item:last-child').find('.t576__img').outerHeight() + 20);
}

function t608_setHeight(recid) {
    var el = $("#rec" + recid);
    var image = el.find(".t608__bgimg");
    image.each(function () {
        var width = $(this).attr("data-image-width");
        var height = $(this).attr("data-image-height");
        var ratio = height / width;
        var padding = ratio * 100;
        $(this).css("padding-bottom", padding + "%");
    });
}

function t651_initPopup(recid) {
    if (window.$isMobile) {
        if ($('#rec' + recid + ' .t651__phone').length == 0) {
            return;
        }
        t651_phone = $('#rec' + recid + ' .t651__phone').html().replace(/\s+/g, '');
        $('#rec' + recid + ' .t651__btn').click(function () {
            window.location.href = "tel:" + t651_phone;
            $('.t651__btn_wrapper').removeClass('t651__btn_animate');
            $('.t651__btn-text').css('display', 'none');
        });
        return;
    }
    $('#rec' + recid).attr('data-animationappear', 'off');
    $('#rec' + recid).css('opacity', '1');
    var el = $('#rec' + recid).find('.t651__popup'),
        analitics = el.attr('data-track-popup'),
        hook = "TildaCallBackWidget" + recid,
        obj = $('#rec' + recid + ' .t651__btn');
    obj.click(function (e) {
        if (obj.hasClass("t651__btn_active")) {
            t651_closePopup();
            return;
        }
        obj.addClass("t651__btn_active");
        t651_showPopup(recid);
        e.preventDefault();
        if (analitics > '') {
            Tilda.sendEventToStatistics(analitics, hook);
        }
    });
}

function t651_showPopup(recid) {
    var el = $('#rec' + recid),
        popup = el.find('.t651__popup');

    $('.t651__btn_wrapper').removeClass('t651__btn_animate');
    $('.t651__btn-text').css('display', 'none');

    popup.css('display', 'block');
    setTimeout(function () {
        popup.addClass('t651__popup_show');
    }, 50);

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            t651_closePopup();
        }
    });
}

function t651_closePopup() {
    $('.t651__btn').removeClass('t651__btn_active');
    $('.t651__popup').removeClass('t651__popup_show');
    setTimeout(function () {
        $('.t651__popup').not('.t651__popup_show').css('display', 'none');
    }, 300);
}

function t651_sendPopupEventToStatistics(popupname) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';
    if (popupname.substring(0, 7) == '#popup:') {
        popupname = popupname.substring(7);
    }

    virtPage += popupname;
    virtTitle += popupname;
    if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
    } else {

        if (ga) {
            if (window.mainTracker != 'tilda') {
                ga('send', {'hitType': 'pageview', 'page': virtPage, 'title': virtTitle});
            }
        }

        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {title: virtTitle, referer: window.location.href});
        }

    }
}

function t668_init(recid) {
    var el = $('#rec' + recid),
        toggler = el.find(".t668__header");

    toggler.click(function () {
        $(this).toggleClass("t668__opened");
        $(this).next().slideToggle();
        if (window.lazy == 'y') {
            t_lazyload_update();
        }
    });
}

function t690_onSuccess(t690_form) {
    var t690_inputsWrapper = t690_form.find('.t-form__inputsbox');
    var t690_inputsHeight = t690_inputsWrapper.height();
    var t690_inputsOffset = t690_inputsWrapper.offset().top;
    var t690_inputsBottom = t690_inputsHeight + t690_inputsOffset;
    var t690_targetOffset = t690_form.find('.t-form__successbox').offset().top;

    if ($(window).width() > 960) {
        var t690_target = t690_targetOffset - 200;
    } else {
        var t690_target = t690_targetOffset - 100;
    }

    if (t690_targetOffset > $(window).scrollTop() || ($(document).height() - t690_inputsBottom) < ($(window).height() - 100)) {
        t690_inputsWrapper.addClass('t690__inputsbox_hidden');
        setTimeout(function () {
            if ($(window).height() > $('.t-body').height()) {
                $('.t-tildalabel').animate({opacity: 0}, 50);
            }
        }, 300);
    } else {
        $('html, body').animate({scrollTop: t690_target}, 400);
        setTimeout(function () {
            t690_inputsWrapper.addClass('t690__inputsbox_hidden');
        }, 400);
    }

    var successurl = t690_form.data('success-url');
    if (successurl && successurl.length > 0) {
        setTimeout(function () {
            window.location.href = successurl;
        }, 500);
    }

}

function t720_onSuccess(t720_form) {
    var t720_inputsWrapper = t720_form.find('.t-form__inputsbox');
    var t720_inputsHeight = t720_inputsWrapper.height();
    var t720_inputsOffset = t720_inputsWrapper.offset().top;
    var t720_inputsBottom = t720_inputsHeight + t720_inputsOffset;
    var t720_targetOffset = t720_form.find('.t-form__successbox').offset().top;

    if ($(window).width() > 960) {
        var t720_target = t720_targetOffset - 200;
    } else {
        var t720_target = t720_targetOffset - 100;
    }

    if (t720_targetOffset > $(window).scrollTop() || ($(document).height() - t720_inputsBottom) < ($(window).height() - 100)) {
        t720_inputsWrapper.addClass('t720__inputsbox_hidden');
        setTimeout(function () {
            if ($(window).height() > $('.t-body').height()) {
                $('.t-tildalabel').animate({opacity: 0}, 50);
            }
        }, 300);
    } else {
        $('html, body').animate({scrollTop: t720_target}, 400);
        setTimeout(function () {
            t720_inputsWrapper.addClass('t720__inputsbox_hidden');
        }, 400);
    }

    var successurl = t720_form.data('success-url');
    if (successurl && successurl.length > 0) {
        setTimeout(function () {
            window.location.href = successurl;
        }, 500);
    }

}


function t720_fixcontentheight(id) {
    /* correct cover height if content more when cover height */
    var el = $("#rec" + id);
    var hcover = el.find(".t-cover").height();
    var hcontent = el.find("div[data-hook-content]").outerHeight();
    if (hcontent > 300 && hcover < hcontent) {
        var hcontent = hcontent + 120;
        if (hcontent > 1000) {
            hcontent += 100;
        }
        console.log('auto correct cover height: ' + hcontent);
        el.find(".t-cover").height(hcontent);
        el.find(".t-cover__filter").height(hcontent);
        el.find(".t-cover__carrier").height(hcontent);
        el.find(".t-cover__wrapper").height(hcontent);
        if ($isMobile == false) {
            setTimeout(function () {
                var divvideo = el.find(".t-cover__carrier");
                if (divvideo.find('iframe').length > 0) {
                    console.log('correct video from cover_fixcontentheight');
                    setWidthHeightYoutubeVideo(divvideo, hcontent + 'px');
                }
            }, 2000);
        }
    }
}
