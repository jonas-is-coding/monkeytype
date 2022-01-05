const layouts = {
    default: {},
    qwerty: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "wW", "eE", "rR", "tT", "yY", "uU", "iI", "oO", "pP", "[{", "]}", "\\|",
            "aA", "sS", "dD", "fF", "gG", "hH", "jJ", "kK", "lL", ";:", "'\"",
            "\\|", "zZ", "xX", "cC", "vV", "bB", "nN", "mM", ",<", ".>", "/?",
            " "
        ]
    },
    dvorak: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "[{", "]}",
            "'\"", ",<", ".>", "pP", "yY", "fF", "gG", "cC", "rR", "lL", "/?", "=+", "\\|",
            "aA", "oO", "eE", "uU", "iI", "dD", "hH", "tT", "nN", "sS", "-_",
            "\\|", ";:", "qQ", "jJ", "kK", "xX", "bB", "mM", "wW", "vV", "zZ",
            " "
        ],
    },
    colemak: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "wW", "fF", "pP", "gG", "jJ", "lL", "uU", "yY", ";:", "[{", "]}", "\\|",
            "aA", "rR", "sS", "tT", "dD", "hH", "nN", "eE", "iI", "oO", "'\"",
            "\\|", "zZ", "xX", "cC", "vV", "bB", "kK", "mM", ",<", ".>", "/?",
            " "
        ]
    },
    colemak_dh: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "wW", "fF", "pP", "bB", "jJ", "lL", "uU", "yY", ";:", "[{", "]}", "\\|",
            "aA", "rR", "sS", "tT", "gG", "mM", "nN", "eE", "iI", "oO", "'\"",
            "\\|", "xX", "cC", "dD", "vV", "zZ", "kK", "hH", ",<", ".>", "/?",
            " "
        ],
    },
    colemak_dh_wide: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "=+", "7&", "8*", "9(", "0)", "-_",
            "qQ", "wW", "fF", "pP", "bB", "[{", "jJ", "lL", "uU", "yY", ";:", "'\"", "\\|",
            "aA", "rR", "sS", "tT", "gG", "]}", "mM", "nN", "eE", "iI", "oO",
            "\\|", "xX", "cC", "dD", "vV", "zZ", "/?", "kK", "hH", ",<", ".>",
            " "
        ],
    },
    colemak_dhk: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "wW", "fF", "pP", "bB", "jJ", "lL", "uU", "yY", ";:", "[{", "]}", "\\|",
            "aA", "rR", "sS", "tT", "gG", "kK", "nN", "eE", "iI", "oO", "'\"",
            "\\|", "xX", "cC", "dD", "vV", "zZ", "mM", "hH", ",<", ".>", "/?",
            " "
        ],
    },
    colemak_dh_matrix: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "wW", "fF", "pP", "bB", "jJ", "lL", "uU", "yY", ";:", "[{", "]}", "\\|",
            "aA", "rR", "sS", "tT", "gG", "mM", "nN", "eE", "iI", "oO", "'\"",
            "\\|", "zZ", "xX", "cC", "dD", "vV", "kK", "hH", ",<", ".>", "/?",
            " "
        ],
    },
    colemak_dh_iso: {
        keymapShowTopRow: false,
        iso: true,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "wW", "fF", "pP", "bB", "jJ", "lL", "uU", "yY", ";:", "[{", "]}", "\\|",
            "aA", "rR", "sS", "tT", "gG", "mM", "nN", "eE", "iI", "oO", "'\"",
            "zZ", "xX", "cC", "dD", "vV", "\\|", "kK", "hH", ",<", ".>", "/?",
            " "
        ],
    },
    colemak_dhk_iso: {
        keymapShowTopRow: false,
        iso: true,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "wW", "fF", "pP", "bB", "jJ", "lL", "uU", "yY", ";:", "[{", "]}", "\\|",
            "aA", "rR", "sS", "tT", "gG", "kK", "nN", "eE", "iI", "oO", "'\"",
            "zZ", "xX", "cC", "dD", "vV", "\\|", "mM", "hH", ",<", ".>", "/?",
            " "
        ],
    },
      colemak_dhv: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "=+", "[{",
            "qQ", "wW", "cC", "pP", "bB", "jJ", "lL", "uU", "yY", ";:", "-_", "]}", "\\|",
            "aA", "rR", "sS", "tT", "gG", "mM", "nN", "eE", "iI", "oO", "'\"",
            "\\|", "xX", "vV", "fF", "dD", "zZ", "kK", "hH", "/?", ".>", ",<",
            " "
        ],
    },
    qwertz: {
        keymapShowTopRow: false,
        iso: true,
        keys: [
            "^°", "1!", "2\"", "3§", "4$", "5%", "6&", "7/", "8(", "9)", "0=", "ß?", "´`",
            "qQ", "wW", "eE", "rR", "tT", "zZ", "uU", "iI", "oO", "pP", "üÜ", "+*", "#'",
            "aA", "sS", "dD", "fF", "gG", "hH", "jJ", "kK", "lL", "öÖ", "äÄ",
            "<>", "yY", "xX", "cC", "vV", "bB", "nN", "mM", ",;", ".:", "-_",
            " "
        ]
    },
    workman: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "dD", "rR", "wW", "bB", "jJ", "fF", "uU", "pP", ";:", "[{", "]}", "\\|",
            "aA", "sS", "hH", "tT", "gG", "yY", "nN", "eE", "oO", "iI", "'\"",
            "\\|", "zZ", "xX", "mM", "cC", "vV", "kK", "lL", ",<", ".>", "/?",
            " "
        ],
    },
    turkish_f: {
        keymapShowTopRow: false,
        keys: [
            "*+", "1!", "2\"", "3^", "4$", "5%", "6&", "7'", "8(", "9)", "0=", "/?", "-_",
            "fF", "gG", "ğĞ", "ıI", "oO", "dD", "rR", "nN", "hH", "pP", "qQ", "wW", "xX",
            "uU", "iİ", "eE", "aA", "üÜ", "tT", "kK", "mM", "lL", "yY", "şŞ",
            "\\|", "jJ", "öÖ", "vV", "cC", "çÇ", "zZ", "sS", "bB", ".:", ",;",
            " "
        ],
    },
    MTGAP_ASRT: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "wW", "lL", "dD", "bB", "jJ", "fF", "uU", "kK", "pP", "[{", "]}", "\\|",
            "aA", "sS", "rR", "tT", "gG", "hH", "nN", "eE", "oO", "iI", "/?",
            "\\|", "zZ", "xX", "cC", "vV", ";:", "yY", "mM", ",<", ".>", "'\"",
            " "
        ],
    },
    norman: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "wW", "dD", "fF", "kK", "jJ", "uU", "rR", "lL", ";:", "[{", "]}", "\\|",
            "aA", "sS", "eE", "tT", "gG", "yY", "nN", "iI", "oO", "hH", "'\"",
            "\\|", "zZ", "xX", "cC", "vV", "bB", "pP", "mM", ",<", ".>", "/?",
            " "
        ]
    },
    halmak: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "wW", "lL", "rR", "bB", "zZ", ";:", "qQ", "uU", "dD", "jJ", "[{", "]}", "\\|",
            "sS", "hH", "nN", "tT", ",<", ".>", "aA", "eE", "oO", "iI", "'\"",
            "\\|", "fF", "mM", "vV", "cC", "/?", "gG", "pP", "xX", "kK", "yY",
            " "
        ]
    },
    QGMLWB: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "gG", "mM", "lL", "wW", "bB", "yY", "uU", "vV", ";:", "[{", "]}", "\\|",
            "dD", "sS", "tT", "nN", "rR", "iI", "aA", "eE", "oO", "hH", "'\"",
            "\\|", "zZ", "xX", "cC", "fF", "jJ", "kK", "pP", ",<", ".>", "/?",
            " "
        ],
    },
    QGMLWY: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "gG", "mM", "lL", "wW", "yY", "fF", "uU", "bB", ";:", "[{", "]}", "\\|",
            "dD", "sS", "tT", "nN", "rR", "iI", "aA", "eE", "oO", "hH", "'\"",
            "\\|", "zZ", "xX", "cC", "vV", "jJ", "kK", "pP", ",<", ".>", "/?",
            " "
        ],
    },
    qwpr: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "wW", "pP", "rR", "fF", "yY", "uU", "kK", "lL", ";:", "[{", "]}", "\\|",
            "aA", "sS", "dD", "tT", "gG", "hH", "nN", "iI", "oO", "eE", "'\"",
            "\\|", "zZ", "xX", "cC", "vV", "bB", "jJ", "mM", ",<", ".>", "/?",
            " "
        ],
    },
    prog_dvorak: {
        keymapShowTopRow: true,
        keys: [
            "$~", "&%", "[7", "{5", "}3", "(1", "=9", "*0", ")2", "+4", "]6", "!8", "#`",
            ";:", ",<", ".>", "pP", "yY", "fF", "gG", "cC", "rR", "lL", "/?", "@^", "\\|",
            "aA", "oO", "eE", "uU", "iI", "dD", "hH", "tT", "nN", "sS", "-_",
            "\\|", "'\"", "qQ", "jJ", "kK", "xX", "bB", "mM", "wW", "vV", "zZ",
            " "
        ],
    },
    german_dvorak: {
        keymapShowTopRow: true,
        iso: true,
        keys: [
            "^°", "1!", "2", "3§", "4$", "5%", "6&", "7/", "8(", "9)", "0=", "+*", "<>",
            "üÜ", ",;", ".:", "pP", "yY", "fF", "gG", "cC", "tT", "pP", "zZ", "ß?", "´`",
            "aA", "oO", "eE", "iI", "uU", "hH", "dD", "rR", "nN", "sS", "lL",
            "äÄ", "öÖ", "qQ", "jJ", "kK", "xX", "bB", "mM", "wW", "vV", "#'",
            " "
        ]
    },
    dvorak_L: {
        keymapShowTopRow: true,
        keys: [
            "`~", "[{", "]}", "/?", "pP", "fF", "mM", "lL", "jJ", "4$", "3#", "2@", "1!",
            ";:", "qQ", "bB", "yY", "uU", "rR", "sS", "oO", ".>", "6^", "5%", "=+", "\\|",
            "-_", "kK", "cC", "dD", "tT", "hH", "eE", "aA", "zZ", "8*", "7&",
            "\\|", "'\"", "xX", "gG", "vV", "wW", "nN", "iI", ",<", "0)", "9(",
            " "
        ],
    },
    dvorak_R: {
        keymapShowTopRow: true,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "jJ", "lL", "mM", "fF", "pP", "/?", "[{", "]}",
            "5%", "6^", "qQ", ".>", "oO", "rR", "sS", "uU", "yY", "bB", ";:", "=+", "\\|",
            "7&", "8*", "zZ", "aA", "eE", "hH", "tT", "dD", "cC", "kK", "-_",
            "\\|", "9(", "0)", "xX", ",<", "iI", "nN", "wW", "vV", "gG", "'\"",
            " "
        ],
    },
    azerty: {
        keymapShowTopRow: false,
        iso: true,
        keys: [
            "`~", "&1", "é2", "\"3", "'4", "(5", "-6", "è7", "_8", "ç9", "à0", ")°", "=+",
            "aA", "zZ", "eE", "rR", "tT", "yY", "uU", "iI", "oO", "pP", "^¨", "$£", "*µ",
            "qQ", "sS", "dD", "fF", "gG", "hH", "jJ", "kK", "lL", "mM", "ù%",
            "<>", "wW", "xX", "cC", "vV", "bB", "nN", ",?", ";.", ":/", "!§",
            " "
        ]
    },
    bepo: {
        keymapShowTopRow: false,
        iso: true,
        keys: [
            "$#", "\"1", "«2", "»3", "(4", ")5", "@6", "+7", "-8", "/9", "*0", "=°", "%`",
            "bB", "éÉ", "pP", "oO", "èÈ", "^!", "vV", "dD", "lL", "jJ", "zZ", "wW", "mM",
            "aA", "uU", "iI", "eE", ",;", "cC", "tT", "sS", "rR", "nN", "mM",
            "êÊ", "àÀ", "yY", "xX", ".:", "kK", "’?", "qQ", "gG", "hH", "fF",
            "  "
        ]
    },
    alpha: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "aA", "bB", "cC", "dD", "eE", "fF", "gG", "hH", "iI", "jJ", "[{", "]}", "\\|",
            "kK", "lL", "mM", "nN", "oO", "pP", "qQ", "rR", "sS", ";:", "'\"",
            "\\|", "tT", "uU", "vV", "wW", "xX", "yY", "zZ", ",<", ".>", "/?",
            " "
        ]
    },
    handsdown: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "cC", "hH", "pP", "vV", "kK", "yY", "oO", "jJ", "/?", "[{", "]}", "\\|",
            "rR", "sS", "nN", "tT", "gG", "wW", "uU", "eE", "iI", "aA", ";:",
            "\\|", "xX", "mM", "lL", "dD", "bB", "zZ", "fF", "'\"", ",<", ".>",
            " "
        ]
    },
    handsdown_alt: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "wW", "gG", "hH", "mM", "kK", "qQ", "cC", "uU", "jJ", "'\"", "[{", "]}", "\\|",
            "rR", "sS", "nN", "tT", "fF", "yY", "aA", "eE", "oO", "iI", ";:",
            "\\|", "xX", "bB", "lL", "dD", "vV", "zZ", "pP", ",<", ".>", "/?",
            " "
        ]
    },
    typehack: {
        keymapShowTopRow: false,
        keys: [
            "^~", "1!", "2@", "3#", "4$", "5%", "6&", "7`", "8(", "9)", "0=", "*+", "\\|",
            "jJ", "gG", "hH", "pP", "fF", "qQ", "vV", "oO", "uU", ";:", "/?", "[{", "]}",
            "rR", "sS", "nN", "tT", "kK", "yY", "iI", "aA", "eE", "lL", "-_",
            "\\|", "zZ", "wW", "mM", "dD", "bB", "cC", ",<", "'\"", ".>", "xX",
            " "
        ],
    },
    MTGAP: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "yY", "pP", "oO", "uU", "jJ", "kK", "dD", "lL", "cC", "wW", "[{", "]}", "\\|",
            "iI", "nN", "eE", "aA", ",;", "mM", "hH", "tT", "sS", "rR", "'\"",
            "\\|", "qQ", "zZ", "/<", ".>", ":?", "bB", "fF", "gG", "vV", "xX",
            " "
        ]
    },
    MTGAP_full: {
        keymapShowTopRow: true,
        keys: [
            "\\^", "1~", "2[", "3{", "4<", "5|", "6#", "7>", "8}", "9]", "0%", "qQ", "zZ",
            "yY", "pP", "oO", "uU", "-=", "kK", "dD", "lL", "cC", "wW", "xX", "/+", "$@",
            "iI", "nN", "eE", "aA", ",:", "mM", "hH", "tT", "sS", "rR", "\"!",
            "\\|", "(`", ")?", "'*", ".;", "_&", "bB", "fF", "gG", "vV", "jJ",
            " "
        ]
      },
    ina: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1[", "2]", "3#", "4$", "5%", "6^", "7&", "8*", "9{", "0}", "qQ", "xX",
            "!+", "pP", "uU", "oO", "-_", "jJ", "bB", "lL", "mM", "yY", "zZ", "vV", "\\|",
            "iI", "nN", "eE", "aA", ",;", "dD", "tT", "kK", "rR", "sS", "'\"",
            "\\|", "=(", "@)", ":<", ".>", "?/", "gG", "hH", "cC", "wW", "fF",
            " "
        ]
    },
    soul: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "wW", "lL", "dD", "pP", "kK", "mM", "uU", "yY", ";:", "[{", "]}", "\\|",
            "aA", "sS", "rR", "tT", "gG", "fF", "nN", "eE", "iI", "oO", "'\"",
            "\\|", "zZ", "xX", "cC", "vV", "jJ", "bB", "hH", ",<", ".>", "/?",
            " "
        ]
    },
    niro: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "wW", "uU", "dD", "pP", "jJ", "fF", "yY", "lL", ";:", "[{", "]}", "\\|",
            "aA", "sS", "eE", "tT", "gG", "hH", "nN", "iI", "rR", "oO", "'\"",
            "\\|", "zZ", "xX", "cC", "vV", "bB", "kK", "mM", ",<", ".>", "/?",
            " "
        ]
    },
    JCUKEN: {
        keymapShowTopRow: true,
        keys: [
            "ёЁ", "1!", "2\"", "3№", "4;", "5%", "6:", "7?", "8*", "9(", "0)", "-_", "=+",
            "йЙ", "цЦ", "уУ", "кК", "еЕ", "нН", "гГ", "шШ", "щЩ", "зЗ", "хХ", "ъЪ", "\\/",
            "фФ", "ыЫ", "вВ", "аА", "пП", "рР", "оО", "лЛ", "дД", "жЖ", "эЭ",
            "\\|", "яЯ", "чЧ", "сС", "мМ", "иИ", "тТ", "ьЬ", "бБ", "юЮ", ".,",
            " "
        ]
    },
    Diktor: {
        keymapShowTopRow: true,
        keys: [
            "ёЁ", "1Ъ", "2Ь", "3№", "4%", "5:", "6;", "7-", "8\"", "9(", "0)", "*_", "=+",
            "цЦ", "ьъ", "яЯ", ",?", ".!", "зЗ", "вВ", "кК", "дД", "чЧ", "шШ", "щЩ", "\\/",
            "уУ", "иИ", "еЕ", "оО", "аА", "лЛ", "нН", "тТ", "сС", "рР", "йЙ",
            "\\|", "фФ", "эЭ", "хХ", "ыЫ", "юЮ", "бБ", "мМ", "пП", "гГ", "жЖ",
            " "
        ]
    },
    Diktor_VoronovMod: {
        keymapShowTopRow: true,
        keys: [
            "ёЁ", "1%", "2№", "3\"", "4.", "5:", "6;", "7-", "8,", "9(", "0)", "*_", "=+",
            "фФ", "ьЬ", "хХ", "яЯ", "ыЫ", "зЗ", "вВ", "кК", "дД", "чЧ", "шШ", "щЩ", "\\/",
            "уУ", "иИ", "еЕ", "оО", "аА", "лЛ", "нН", "тТ", "сС", "рР", "йЙ",
            "\\|", "?!", "ъЪ", "эЭ", "юЮ", "цЦ", "бБ", "мМ", "пП", "гГ", "жЖ",
            " "
        ]
    },
    Redaktor: {
        keymapShowTopRow: true,
        keys: [
            "ёЁ", "1№", "2:", "3;", "4/", "5₽", "6@", "7ё", "8?", "9!", "0%", "ЪЬ", "=+",
            "цЦ", "ыЫ", "яЯ", "йЙ", "ьъ", "зЗ", "дД", "вВ", "кК", "гГ", "шШ", "щЩ", "\\/",
            "уУ", "иИ", "оО", "еЕ", "аА", "лЛ", "рР", "тТ", "нН", "сС", "хХ",
            "\\|", "фФ", "юЮ", "эЭ", ",-", ".\"", "чЧ", "мМ", "пП", "бБ", "жЖ",
            " "
        ]
    },
    JUIYAF: {
        keymapShowTopRow: true,
        keys: [
            "ёЁ", "1!", "2\"", "3№", "4;", "5%", "6:", "7?", "8*", "9(", "0)", "-_", "=+",
            "йЙ", "уУ", "иИ", "яЯ", "фФ", "хХ", "жЖ", "рР", ".,", "шШ", "цЦ", "ЬЪ", "\\/",
            "вВ", "еЕ", "аА", "оО", "чЧ", "гГ", "тТ", "нН", "сС", "дД", "бБ",
            "\\|", "ьъ", "эЭ", "юЮ", "ыЫ", "щЩ", "пП", "кК", "лЛ", "зЗ", "мМ",
            " "
        ]
    },
    Zubachev: {
        keymapShowTopRow: true,
        keys: [
            "ёЁ", "1!", "2\"", "3№", "4;", "5%", "6:", "7?", "8*", "9(", "0)", "-_", "=+",
            "фФ", "ыЫ", "аА", "яЯ", ",Ъ", "йЙ", "мМ", "рР", "пП", "хХ", "цЦ", "щЩ", "\\/",
            "гГ", "иИ", "еЕ", "оО", "уУ", "лЛ", "тТ", "сС", "нН", "зЗ", "жЖ",
            "\\|", "шШ", "ьъ", "юЮ", ".Ь", "эЭ", "бБ", "дД", "вВ", "кК", "чЧ",
            " "
        ]
    },
    ISRT: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "yY", "cC", "lL", "mM", "kK", "zZ", "fF", "uU", ",<", "'\"", "[{", "]}", "\\|",
            "iI", "sS", "rR", "tT", "gG", "pP", "nN", "eE", "aA", "oO", ";:",
            "\\|", "qQ", "vV", "wW", "dD", "jJ", "bB", "hH", "/?", ".>", "xX",
            " "
        ],
    },
    ISRT_Angle: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "yY", "cC", "lL", "mM", "kK", "zZ", "fF", "uU", ",<", "'\"", "[{", "]}", "\\|",
            "iI", "sS", "rR", "tT", "gG", "pP", "nN", "eE", "aA", "oO", ";:",
            "\\|", "vV", "wW", "dD", "jJ", "qQ", "bB", "hH", "/?", ".>", "xX",
            " "
        ],
    },
    colemak_Qix: {
        keymapShowTopRow: true,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "=+", "[{",
            ";:", "lL", "cC", "mM", "kK", "jJ", "fF", "uU", "yY", "qQ", "-_", "]}", "\\|",
            "aA", "rR", "sS", "tT", "gG", "pP", "nN", "eE", "iI", "oO", "'\"",
            "\\|", "xX", "wW", "dD", "vV", "zZ", "bB", "hH", "/?", ".>", ",<",
            " "
        ],
    },
      colemak_Qi: {
        keymapShowTopRow: true,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "=+", "[{",
            "qQ", "lL", "wW", "mM", "kK", "jJ", "fF", "uU", "yY", "'\"", "-_", "]}", "\\|",
            "aA", "rR", "sS", "tT", "gG", "pP", "nN", "eE", "iI", "oO", ";:",
            "\\|", "zZ", "xX", "cC", "dD", "vV", "bB", "hH", ",<", ".>", "/?",
            " "
        ],
    },
    colemaQ: {
        keymapShowTopRow: true,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "=+", "[{",
            ";:", "wW", "fF", "pP", "bB", "jJ", "lL", "uU", "yY", "qQ", "-_", "]}", "\\|",
            "aA", "rR", "sS", "tT", "gG", "mM", "nN", "eE", "iI", "oO", "'\"",
            "\\|", "xX", "cC", "dD", "kK", "zZ", "vV", "hH", "/?", ".>", ",<",
            " "
        ],
    },
      colemaQ_F: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "=+", "[{",
            ";:", "wW", "gG", "pP", "bB", "jJ", "lL", "uU", "yY", "qQ", "-_", "]}", "\\|",
            "aA", "rR", "sS", "tT", "fF", "mM", "nN", "eE", "iI", "oO", "'\"",
            "\\|", "xX", "cC", "dD", "kK", "zZ", "vV", "hH", "/?", ".>", ",<",
            " "
        ],
    },
    engram: {
        keymapShowTopRow: true,
        keys: [
            "[{", "1|", "2=", "3~", "4+", "5<", "6>", "7^", "8&", "9%", "0*", "]}", "/\\",
            "bB", "yY", "oO", "uU", "'(", "\")", "lL", "dD", "wW", "vV", "zZ", "#$", "@`",
            "cC", "iI", "eE", "aA", ",;", ".:", "hH", "tT", "sS", "nN", "qQ",
            "\\|", "gG", "xX", "jJ", "kK", "-_", "?!", "rR", "mM", "fF", "pP",
            " "
        ]
    },
    semimak: {
        keymapShowTopRow: false,
        keys: [
            "`~",  "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(",  "0)", "-_", "=+",
            "fF",  "lL", "hH", "vV", "zZ", "qQ", "wW", "uU", "oO",  "yY", "[{", "]}", "\\|",
            "sS",  "rR", "nN", "tT", "kK", "cC", "dD", "eE", "aA",  "iI",  ";:",
            "\\|", "xX", "'\"", "bB", "mM", "jJ", "pP", "gG", ",<",  ".>", "/?",
            " "
        ],
    },
    semimak_jq: {
        keymapShowTopRow: false,
        keys: [
            "`~",  "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(",  "0)", "-_", "=+",
            "fF",  "lL", "hH", "vV", "zZ", "'\"", "wW", "uU", "oO",  "yY", "[{", "]}", "\\|",
            "sS",  "rR", "nN", "tT", "kK", "cC", "dD", "eE", "aA",  "iI",  ";:",
            "\\|", "xX", "jJ", "bB", "mM", "qQ", "pP", "gG", ",<",  ".>", "/?",
            " "
        ],
    },
    boo: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "[{", "]}",
            ",<", ".>", "uU", "cC", "vV", "qQ", "fF", "dD", "lL", "yY", "?/", "=+", "\\|",
            "aA", "oO", "eE", "sS", "gG", "bB", "nN", "tT", "rR", "iI", "-_",
            "\\|", ";:", "xX", "'\"", "wW", "zZ", "pP", "hH", "mM", "kK", "jJ",
            " "
        ],
    },
    boo_mangle: {
        keymapShowTopRow: true,
        keys: [
            "$~", "&%", "[7", "{5", "}3", "(1", "=9", "*0", ")2", "+4", "]6", "!8", "#`",
            ",<", ".>", "uU", "cC", "vV", "qQ", "fF", "dD", "lL", "yY", "/?", "@^", "\\|",
            "aA", "oO", "eE", "sS", "gG", "bB", "nN", "tT", "rR", "iI", "-_",
            "\\|", "xX", "'\"", "wW", ";:", "zZ", "pP", "hH", "mM", "kK", "jJ",
            " "
        ],
    },
    APT: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "cC", "dD", "lL", "xX", "zZ", "yY", "oO", "uU", ";:", "[{", "]}", "\\|",
            "rR", "sS", "tT", "hH", "kK", "pP", "nN", "eE", "iI", "aA", "/?",
            "\\|", "wW", "gG", "bB", "mM", "vV", "jJ", "fF", "'\"", ",<", ".>",
            " "
        ]
    },
    APTx: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "cC", "dD", "wW", "xX", "zZ", "pP", "oO", "uU", ";:", "[{", "]}", "\\|",
            "rR", "sS", "tT", "nN", "vV", "yY", "hH", "eE", "iI", "aA", "/?",
            "\\|", "lL", "gG", "bB", "mM", "jJ", "kK", "fF", "'\"", ",<", ".>",
            " "
        ]
    },
    thai_kedmanee: {
        keymapShowTopRow: true,
        keys: [
            "-%", "ๅ+", "/๑", "_๒", "ภ๓", "ถ๔", "ุู", "ึ฿", "ค๕", "ต๖", "จ๗", "ข๘", "ช๙",
            "ๆ๐", "ไ\"", "ำฎ", "พฑ", "ะธ", "ัํ", "ี๊", "รณ", "นฯ", "ยญ", "บฐ", "ล,", "ฃฅ",
            "ฟฤ", "หฆ", "กฏ", "ดโ", "เฌ", "้็", "่๋", "าษ", "สศ", "วซ", "ง.",
            "ฃฅ", "ผ(", "ป)", "แฉ", "อฮ", "ิฺ", "ื์", "ท?", "มฒ", "ใฬ", "ฝฦ",
            " "
        ]
    },
    thai_pattachote: {
        keymapShowTopRow: true,
        keys: [
            "฿~", "ๅ+", "๒\"", "๓/", "๔,", "๕?", "ูุ", "๗_", "๘.", "๙(", "๐)", "๑-", "๖%",
            "็๊", "ตฤ", "ยๆ", "อญ", "รษ", "่ึ", "ดฝ", "มซ", "วถ", "แฒ", "ใฯ", "ฌฦ", "ฃฅ",
            "้๋", "ทธ", "งำ", "กณ", "ั์", "ีื", "าผ", "นช", "เโ", "ไฆ", "ขฑ",
            "ฃฅ", "บฎ", "ปฏ", "ลฐ", "หภ", "ิั", "คศ", "สฮ", "ะฟ", "จฉ", "พฬ",
            " "
        ]
    },
    thai_manoonchai: {
        keymapShowTopRow: true,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "ใฒ", "ตฏ", "หซ", "ลญ", "สฟ", "ปฉ", "ัึ", "กธ", "ิฐ",  "บฎ", "็ฆ",  "ฬฑ", "ฯฌ",
            "งษ", "เถ", "รแ", "นช", "มพ", "อผ", "าำ", "่ข",  "้โ", "วภ", "ื\"",
            "ฯฌ", "ุฤ",  "ไฝ", "ทๆ", "ยณ", "จ๊",  "ค๋", "ี์", "ดศ", "ะฮ", "ู?",
            " "
        ]
    },  
    persian_standard: {
        keymapShowTopRow: true,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ",  "ح", "ج",  "چ", "\"",
            "ش", "س", "ی", "ب", "ل", "اآ", "ت", "ن",  "م", "ک", "گ",
            "\\|", "ظ", "ط", "زژ", "ر", "ذ", "د", "پ", "و", ".", "/?",
            " "
        ]
    },
    arabic: {
        keymapShowTopRow: true,
        keys: [
            "ذّ","ذّ", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_",
            "ضَ", "صً", "ثُ", "قٌ", "فﻹ", "غإ", "ع`", "ه÷", "خ×",  "ح؛", "ج<",  "د>", 
            "\\…","شِ", "سٍ", "ي]", "ب[", "لﻷ", "اأ", "تـ", "ن،",  "م/", "ك:", "ط\"",
            "\\|", "ئ~", "ءْ", "ؤ}", "ر{", "ﻻﻵ", "ىآ", "ة'", "و,", "ز.", "ظ?",
            " "
        ]
    },
    arabic_mac: {
        keymapShowTopRow: false,
        keys: [
            "§±", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "ضَ", "صً", "ثِ", "قٍ", "فُ", "غٌ", "عْ", "هّ", "خ]", "ح[", "ج}", "ة{", "\\|",
            "ش«", "س»", "يى", "ب", "ل", "اآ", "ت", "ن٫", "م٬", "ك:", "؛\"",
            "ـ", "ظ'", "ط", "ذئ", "دء", "زأ", "رإ", "وؤ", "،>", ".<", "/؟",
            " "
        ]
    },
    brasileiro_nativo: {
        keymapShowTopRow: false,
        iso: true,
        keys: [
            "=+", "1!", "2@", "3#", "4$", "5%", "6¨", "7&", "8*", "9(", "0)", "[{", "]}",
            "/?", ",<", ".>", "hH", "xX", "wW", "lL", "tT", "cC", "pP", "~^", "-_", "'\"",
            "iI", "eE", "aA", "oO", "uU", "mM", "dD", "sS", "rR", "nN", "´`",
            ";:", "yY", "çÇ", "jJ", "bB", "kK", "qQ", "vV", "gG", "fF", "zZ", "\\|",
            " "
        ]
    },
      Foalmak: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "bB", "xX", ".>", "wW", "vV", "zZ", "/?", "uU", "tT", "kK", "[{", "]}", "\\|",
            "fF", "oO", "aA", "lL", "sS", "nN", "eE", "iI", "gG", "hH", ";:",
            "\\|", "pP", "'\"", ".>", "mM", "cC", "qQ", "jJ", "yY", "dD", "rR",
            " "
        ]
    },
      quartz: {
        keymapShowTopRow: true,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "=+", "6^", "7&", "8*", "9(", "0)", "-_", 
            "qQ", "uU", "aA", "rR", "tT", "zZ", "/?", "gG", "lL", "yY", "pP", "hH", "\\|",
            "[{", "jJ", "oO", "bB", "]}", ";:", "vV", "eE", "xX", "'\"", "dD",
            "\\|", "cC", "wW", "mM", ",<", "fF", "iI", "nN", "kK", "sS", ".>",
            " "
        ]
    },
    arensito: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "lL", ".>", "pP", "'\"", ";:", "fF", "uU", "dD", "kK", "[{", "]}", "\\|",
            "aA", "rR", "eE", "nN", "bB", "gG", "sS", "iI", "tT", "oO", "/?",
            "\\|", "zZ", "wW", ",<", "hH", "jJ", "vV", "cC", "yY", "mM", "xX",
            " "
        ]
    },
    ARTS: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "lL", "dD", "yY", "gG", "jJ", "mM", "oO", "uU", ";:", "[{", "]}", "\\|",
            "aA", "rR", "tT", "sS", "cC", "pP", "nN", "eE", "iI", "hH", "/?",
            "\\|", "zZ", "xX", "kK", "wW", "vV", "bB", "fF", "'\"", ",<", ".>",
            " "
        ]
    },
    beakl_15: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "hH", "oO", "uU", "xX", "gG", "cC", "rR", "fF", "zZ", "[{", "]}", "\\|",
            "yY", "iI", "eE", "aA", ".>", "dD", "sS", "tT", "nN", "bB", ";:",
            "\\|", "jJ", "/?", ",<", "kK", "'\"", "wW", "mM", "lL", "pP", "vV",
            " "
        ]
    },
    beakl_19: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", ".>", "oO", "uU", "jJ", "wW", "dD", "nN", "mM", ",<", "[{", "]}", "\\|",
            "hH", "aA", "eE", "iI", "kK", "gG", "sS", "rR", "tT", "pP", ";:",
            "\\|", "zZ", "'\"", "/?", "yY", "xX", "bB", "cC", "lL", "fF", "vV",
            " "
        ]
    },
    beakl_19_bis: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "yY", "oO", "uU", "zZ", "wW", "dD", "nN", "cC", "kK", "[{", "]}", "\\|",
            "hH", "iI", "eE", "aA", ",<", "gG", "tT", "rR", "sS", "pP", ";:",
            "\\|", "jJ", "'\"", "/?", ".>", "xX", "vV", "mM", "lL", "fF", "bB",
            " "
        ]
    },
    capewell_dvorak: {
        keymapShowTopRow: true,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "[{", "]}",
            "'\"", ",<", ".>", "pP", "yY", "qQ", "fF", "gG", "rR", "kK", "/?", "=+", "\\|",
            "oO", "aA", "eE", "iI", "uU", "dD", "hH", "tT", "nN", "sS", "-_",
            "\\|", "zZ", "xX", "cC", "vV", "jJ", "lL", "mM", "wW", "bB", ";:",
            " "
        ],
    },
    colman: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "lL", "rR", "wW", "bB", "jJ", "mM", "uU", "yY", ";:", "[{", "]}", "\\|",
            "aA", "nN", "hH", "sS", "fF", "pP", "tT", "eE", "iI", "oO", "'\"",
            "\\|", "zZ", "xX", "cC", "vV", "kK", "gG", "dD", ",<", ".>", "/?",
            " "
        ]
    },
    heart: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "gG", "dD", "vV", "xX", "jJ", "yY", "oO", "uU", ";:", "[{", "]}", "\\|",
            "rR", "sS", "tT", "hH", "lL", "pP", "nN", "aA", "iI", "eE", "'\"",
            "\\|", "wW", "cC", "bB", "mM", "kK", "zZ", "fF", ",<", ".>", "/?",
            " "
        ]
    },
      klauser: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "kK", ",<", "uU", "yY", "pP", "wW", "lL", "mM", "fF", "cC", "[{", "]}", "\\|",
            "oO", "aA", "eE", "iI", "dD", "rR", "nN", "tT", "hH", "sS", "'\"",
            "\\|", "qQ", ".>", "'\"", ";:", "zZ", "xX", "vV", "gG", "bB", "jJ",
            " "
        ]
    },
    oneproduct: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "pP", "lL", "dD", "wW", "gG", "jJ", "xX", "oO", "yY", "qQ", "[{", "]}", "\\|",
            "nN", "rR", "sS", "tT", "mM", "uU", "aA", "eE", "iI", "hH", "'\"",
            "\\|", "zZ", "cC", "fF", "vV", "bB", ",<", ".>", "?/", ";:", "kK",
            " "
        ]
    },
    pine: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "yY", "lL", "rR", "dD", "wW", "jJ", "mM", "oO", "uU", ",<", "[{", "]}", "\\|",
            "cC", "sS", "nN", "tT", "gG", "pP", "hH", "aA", "eE", "iI", ";:",
            "\\|", "xX", "zZ", "qQ", "vV", "kK", "bB", "fF", "'\"", "/?", ".>",
            " "
        ]
    },
    real: {
        keymapShowTopRow: true,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "[{", "]}",
            "yY", "lL", "uU", "oO", ".>", "zZ", "fF", "hH", "cC", "wW", "/?", "=+", "\\|",
            "iI", "rR", "eE", "aA", ",<", "dD", "tT", "nN", "sS", "mM", "-_",
            "\\|", ";:", "jJ", "'\"", "qQ", "xX", "pP", "kK", "bB", "gG", "vV",
            " "
        ]
    },
    rolll: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "yY", "oO", "uU", "wW", "bB", "xX", "kK", "cC", "lL", "vV", "[{", "]}", "\\|",
            "iI", "aA", "eE", "nN", "pP", "dD", "hH", "sS", "rR", "tT", "'\"",
            "\\|", "jJ", "/?", ",<", ".>", "qQ", "fF", "mM", "gG", "'\"", "zZ",
            " "
        ]
    },
    stndc: {
        keymapShowTopRow: true,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9{", "0}", "([", ")]",
            "vV", "mM", "hH", "gG", "pP", "xX", "lL", "oO", "uU", "yY", "jJ", "=+", "\\|",
            "sS", "tT", "nN", "dD", "cC", "wW", "rR", "aA", "eE", "iI", "-_",
            "\\|", "zZ", "kK", "bB", "fF", "qQ", ",;", ".:", "'<", "\">", "?!",
            " "
        ]
    },
      three: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "fF", "uU", "yY", "zZ", "xX", "kK", "cC", "wW", "bB", "[{", "]}", "\\|",
            "oO", "hH", "eE", "aA", "iI", "dD", "rR", "tT", "nN", "sS", "/?",
            "\\|", ",<", "mM", ".>", "jJ", ";:", "gG", "lL", "pP", "vV", "'\"",
            " "
        ]
    },
    uciea: {
        keymapShowTopRow: true,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "[{", "]}",
            "pP", "yY", "uU", "oO", "-_", "kK", "dD", "hH", "fF", "xX", "qQ", "=+", "\\|",
            "cC", "iI", "eE", "aA", "'/", "gG", "tT", "nN", "sS", "rR", "vV",
            "\\|", "zZ", "\"?", ",<", ".>", ";:", "wW", "mM", "lL", "bB", "jJ",
            " "
        ],
    },
      asset: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "qQ", "wW", "jJ", "fF", "gG", "yY", "pP", "uU", "lL", ";:", "[{", "]}", "\\|",
            "aA", "sS", "eE", "tT", "dD", "hH", "nN", "iI", "oO", "rR", "'\"",
            "\\|", "zZ", "xX", "cC", "vV", "bB", "kK", "mM", ",<", ".>", "/?",
            " "
        ]
    },
    dwarf: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(",  "0)", "-_", "=+",
            "vV", "lL", "hH", "kK", "jJ", "gG", "wW", "oO", "uU", ",>", "[{", "]}", "\\|",
            "sS", "rR", "nN", "tT", "mM", "yY", "dD", "aA", "eE", "iI", "/?",
            "\\|", "xX", "qQ", "bB", "fF", "zZ", "pP", "cC", "'\"", ";:", ".<",
            " "
        ],
    },
    flaw: {
        keymapShowTopRow: false,
        keys: [
            "`~",  "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(",  "0)", "-_", "=+",
            "fF",  "lL", "aA", "wW", "pP", "zZ", "kK", "uU", "rR",  "/?", "[{", "]}", "\\|",
            "hH",  "sS", "oO", "yY", "cC", "mM", "tT", "eE", "nN",  "iI",  ";:",
            "\\|", "bB", "jJ", "'\"", "gG", "vV", "qQ", "dD", ".>",  "xX", ",<",
            " "
        ],
    },
    whorf: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(",  "0)", "-_", "=+",
            "fF", "lL", "hH", "dD", "mM", "vV", "wW", "oO", "uU", ",<", "[{", "]}", "\\|",
            "sS", "rR", "nN", "tT", "kK", "gG", "yY", "aA", "eE", "iI", "/?",
            "\\|", "xX", "jJ", "bB", "zZ", "qQ", "pP", "cC", "'\"", ";:", ".>",
            " "
        ],
    },
    whorf6: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(",  "0)", "-_", "=+",
            "fF", "lL", "hH", "dD", "vV", "zZ", "gG", "oO", "uU", ".>", "[{", "]}", "\\|",
            "sS", "rR", "nN", "tT", "mM", "pP", "yY", "eE", "iI", "aA", "/?",
            "\\|", "xX", "jJ", "bB", "kK", "qQ", "cC", "wW", "'\"", ",<", ";:",
            " "
        ],
    },
    sertain: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(",  "0)", "-_", "=+",
            "xX", "lL", "dD", "kK", "vV", "zZ", "wW", "oO", "uU", ";:", "[{", "]}", "\\|",
            "sS", "rR", "tT", "nN", "fF", "gG", "yY", "eE", "iI", "aA", "/?",
            "\\|", "qQ", "jJ", "mM", "hH", "bB", "pP", "cC", "'\"", ",<", ".>",
            " "
        ],
    },
    ctgap: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(",  "0)", "-_", "=+",
            "wW", "cC", "lL", "dD", "kK", "jJ", "yY", "oO", "uU", "/?", "[{", "]}", "\\|",
            "rR", "sS", "tT", "hH", "mM", "pP", "nN", "eE", "iI", "aA", "/?",
            "\\|", "qQ", "vV", "gG", "fF", "bB", "zZ", "xX", "'\"", ",<", ".>",
            " "
        ],
    },
    ctgap_3: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(",  "0)", "-_", "=+",
            "vV", "pP", "lL", "cC", "fF", "kK", "uU", "oO", "yY", "jJ", "[{", "]}", "\\|",
            "rR", "nN", "tT", "sS", "dD", "'\"", "aA", "eE", "iI", "hH", "/?",
            "\\|", "zZ", "bB", "mM", "gG", "wW", "xX", ",<", ".>", ";:", "qQ",
            " "
        ],
    },
    octa8: {
        keymapShowTopRow: false,
        keys: [
            "`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+",
            "yY", "oO", "uU", "kK", "xX", "gG", "wW", "dD", "lL", ",<", "[{", "]}", "\\|",
            "iI", "aA", "eE", "nN", "fF", "bB", "sS", "tT", "rR", "cC", "'\"",
            "\\|", "/?", "zZ", "hH", "'\"", "qQ", "vV", "pP", "mM", "jJ", ".>",
            " "
        ]
    },
}
export default layouts;
