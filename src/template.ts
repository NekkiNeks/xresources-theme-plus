import * as Color from 'color';

export default (colors: Record<string, Color>, bordered: boolean) => {
	colors.backgroundDarken = colors.background.darken(0.05);

	return {
		type: 'dark',
		colors: {
			// Colour reference https://code.visualstudio.com/docs/getstarted/theme-color-reference

			// CONTRAST COLOURS
			// --

			// BASE COLOURS
			focusBorder: colors.color1.hex() + '77',
			foreground: colors.foreground.hex() + '99',
			'widget.shadow': colors.background.darken(0.25).hex(),
			'selection.background': colors.foreground.hex() + '77',

			// TEXT COLOURS
			'textBlockQuote.background': colors.background.lighten(0.2).hex(),
			'textLink.foreground': colors.color1.hex(),
			'textLink.activeForeground': colors.color1.hex(),
			'textPreformat.foreground': colors.foreground.hex(),

			// BUTTON CONTROL
			'button.background': colors.color1.hex(),
			'button.foreground': colors.background.hex(),
			//'button.hoverBackground': '',

			// DROPDOWN CONTROL
			'dropdown.background': colors.background.lighten(0.2).hex(),
			'dropdown.foreground': colors.foreground.hex() + '99',
			'dropdown.border': colors.color8.hex() + '77',

			// INPUT CONTROL
			'input.background': colors.background.lighten(0.2).hex(),
			'input.border': colors.color8.hex() + '55',
			'input.foreground': colors.foreground.hex(),
			'input.placeholderForeground': colors.color8.hex() + '77',
			'inputOption.activeBorder': colors.color1.hex(),
			'inputValidation.errorBackground': colors.background.hex(),
			'inputValidation.errorBorder': colors.color4.hex(),
			'inputValidation.infoBackground': colors.background.hex(),
			'inputValidation.infoBorder': colors.color2.hex(),
			'inputValidation.warningBackground': colors.background.hex(),
			'inputValidation.warningBorder': colors.color3.hex(),

			// SCROLLBAR CONTROL
			'scrollbar.shadow': colors.background.darken(0.3).hex() + 55,
			'scrollbarSlider.background': colors.foreground.hex() + '44',
			'scrollbarSlider.hoverBackground': colors.foreground.hex() + '77',
			'scrollbarSlider.activeBackground': colors.foreground.hex() + '92',

			// BADGE
			'badge.background': colors.color1.hex(),
			'badge.foreground': colors.background.hex(),

			// PROGRESS BAR
			'progressBar.background': colors.color1.hex(),

			// LISTS AND TREES
			'list.activeSelectionBackground': colors.color8.hex() + '33',
			'list.activeSelectionForeground': colors.foreground.hex(),
			'list.focusBackground': colors.color8.hex() + '33',
			'list.focusForeground': colors.foreground.hex() + '99',
			'list.highlightForeground': colors.color1.hex(),
			'list.hoverBackground': colors.color8.hex() + '33',
			'list.hoverForeground': colors.foreground.hex() + '99',
			'list.inactiveSelectionBackground': colors.color8.hex() + '33',
			'list.inactiveSelectionForeground': colors.foreground.hex() + '99',
			'list.invalidItemForeground': colors.foreground.hex() + '77',

			// ACTIVITY BAR
			'activityBar.background': colors.background.hex(),
			'activityBar.foreground': colors.color8lighten.hex(),
			'activityBar.border': bordered ? colors.color8.hex() + '33' : colors.background.hex(),
			'activityBarBadge.background': colors.color1.hex(),
			'activityBarBadge.foreground': colors.background.hex(),

			// SIDE BAR
			'sideBar.background': colors.background.hex(),
			'sideBar.border': bordered ? colors.color8.hex() + '33' : colors.background.hex(),
			'sideBarTitle.foreground': colors.foreground.hex() + '99',
			'sideBarSectionHeader.background': colors.background.hex(),
			'sideBarSectionHeader.foreground': colors.foreground.hex() + '99',

			// EDITOR GROUPS & TABS
			'editorGroup.border': colors.color8.hex() + '33',
			//'editorGroup.background': colors.background.lighten(0.20).hex(), // deprecated
			'editorGroupHeader.noTabsBackground': colors.background.hex(),
			'editorGroupHeader.tabsBackground': colors.background.hex(),
			'editorGroupHeader.tabsBorder': bordered ? colors.color8.hex() + '33' : colors.background.hex(),
			'tab.activeBackground': bordered ? colors.background.lighten(0.2).hex() : colors.background.hex(),
			'tab.activeForeground': colors.foreground.hex(),
			'tab.border': bordered ? colors.color8.hex() + '33' : colors.background.hex(),
			'tab.activeBorder': bordered ? undefined : colors.color1.hex(),
			'tab.activeBorderTop': bordered ? colors.color1.hex() : undefined,
			'tab.unfocusedActiveBorder': bordered ? undefined : colors.foreground.hex() + '99',
			'tab.unfocusedActiveBorderTop': bordered ? colors.foreground.hex() + '99' : undefined,
			'tab.inactiveBackground': colors.background.hex(),
			'tab.inactiveForeground': colors.foreground.hex() + '99',
			'tab.unfocusedActiveForeground': colors.foreground.hex() + '99',
			'tab.unfocusedInactiveForeground': colors.foreground.hex() + '99',

			// EDITOR
			'editor.background': bordered ? colors.backgroundDarken.hex() : colors.background.hex(),
			'editor.foreground': colors.foreground.hex(),
			'editorLineNumber.foreground': colors.color8.hex() + '92',
			'editorLineNumber.activeForeground': colors.color8.hex(),
			'editorCursor.foreground': colors.cursorColor.hex(),

			// Editor sticky header under tabs
			'editorStickyScroll.background': colors.background.hex(),
			'editorStickyScrollHover.background': colors.background.lighten(0.2).hex(),

			'editor.selectionBackground': colors.color8.hex() + '77',
			'editor.inactiveSelectionBackground': colors.color8.hex() + '44',
			'editor.selectionHighlightBackground': colors.color8.hex() + '44',
			'editor.selectionHighlightBorder': colors.color8.hex(),

			'editor.wordHighlightBackground': colors.color8.hex() + '44',
			'editor.wordHighlightStrongBackground': colors.color2.hex() + '77',

			'editor.findMatchBackground': colors.color1.hex() + '0e',
			'editor.findMatchBorder': colors.color1.hex(),
			'editor.findMatchHighlightBackground': colors.color1.hex() + '0e',
			'editor.findMatchHighlightBorder': colors.color1.hex() + '66',
			'editor.findRangeHighlightBackground': colors.color8.hex() + '44',
			'editor.findRangeHighlightBorder': colors.background.hex() + '00',

			// 'editor.hoverHighlightBackground': '',

			'editor.lineHighlightBackground': colors.foreground.hex() + '22',
			// 'editor.lineHighlightBorder': '',

			'editorLink.activeForeground': colors.color1.hex(),

			'editor.rangeHighlightBackground': colors.color8.hex() + '33',

			'editorWhitespace.foreground': colors.color8.hex() + '66',

			'editorIndentGuide.background': colors.color8.hex() + '44',
			'editorIndentGuide.activeBackground': colors.color8.hex() + '77',

			'editorRuler.foreground': colors.color8.hex() + '44',
			'editorCodeLens.foreground': colors.color8.hex() + 'b0',

			'editorBracketMatch.background': colors.color8.hex() + '33',
			'editorBracketMatch.border': colors.color8.hex() + '55',

			// OVERVIEW RULER
			'editorOverviewRuler.border': colors.color8.hex() + '33',
			'editorOverviewRuler.modifiedForeground': colors.color3.hex() + 'bb',
			'editorOverviewRuler.addedForeground': colors.color2.hex() + 'bb',
			'editorOverviewRuler.deletedForeground': colors.color4.hex() + 'bb',
			'editorOverviewRuler.errorForeground': colors.color4.hex(),
			'editorOverviewRuler.warningForeground': colors.color1.hex(),

			// ERRORS AND WARNINGS
			'editorError.foreground': colors.color1.hex(),
			'editorWarning.foreground': colors.color3.hex(),
			'editorInfo.foreground': colors.color4.hex(),
			'editorHint.foreground': colors.color2.hex(),

			// GUTTER
			'editorGutter.modifiedBackground': colors.color3.hex() + 'bb',
			'editorGutter.addedBackground': colors.color2.hex() + 'bb',
			'editorGutter.deletedBackground': colors.color4.hex() + 'bb',

			// DIFF EDITOR
			'diffEditor.insertedTextBackground': colors.color10.hex() + '33',
			'diffEditor.removedTextBackground': colors.color3.hex() + '33',

			// EDITOR WIDGET
			'editorWidget.background': colors.background.lighten(0.2).hex(),
			'editorSuggestWidget.background': colors.background.lighten(0.2).hex(),
			'editorSuggestWidget.border': colors.color8.hex() + '22',
			'editorSuggestWidget.highlightForeground': colors.color1.hex(),
			'editorSuggestWidget.selectedBackground': colors.color8.hex() + '33',
			'editorHoverWidget.background': colors.background.lighten(0.2).hex(),
			'editorHoverWidget.border': colors.color8.hex() + '22',

			// DEBUG EXCEPTION
			'debugExceptionWidget.border': colors.color8.hex() + '33',
			'debugExceptionWidget.background': colors.background.lighten(0.2).hex(),

			// EDITOR MARKER
			'editorMarkerNavigation.background': colors.background.lighten(0.2).hex(),

			// PEEK VIEW
			'peekView.border': colors.color8.hex() + '33',
			'peekViewEditor.background': colors.background.lighten(0.2).hex(),
			'peekViewEditor.matchHighlightBackground': colors.color1.hex() + '44',
			'peekViewResult.background': colors.background.lighten(0.2).hex(),
			'peekViewResult.fileForeground': colors.foreground.hex() + '99',
			'peekViewResult.matchHighlightBackground': colors.color1.hex() + '44',
			'peekViewTitle.background': colors.background.lighten(0.2).hex(),
			'peekViewTitleDescription.foreground': colors.foreground.hex() + '99',
			'peekViewTitleLabel.foreground': colors.foreground.hex() + '99',

			// Merge Conflicts
			// 'merge.currentHeaderBackground': '?',
			// 'merge.currentContentBackground': '?',
			// 'merge.incomingHeaderBackground': '?',
			// 'merge.incomingContentBackground': '?',
			// 'merge.border': '?',
			// 'merge.commonContentBackground': '?',
			// 'merge.commonHeaderBackground': '?',
			// 'editorOverviewRuler.currentContentForeground': '?',
			// 'editorOverviewRuler.incomingContentForeground': '?',
			// 'editorOverviewRuler.commonContentForeground': '?',

			// Panel
			'panel.background': bordered ? colors.backgroundDarken.hex() : colors.background.hex(),
			'panel.border': colors.color8.hex() + '33',
			'panelTitle.activeBorder': colors.color1.hex(),
			'panelTitle.activeForeground': colors.foreground.hex(),
			'panelTitle.inactiveForeground': colors.foreground.hex() + '99',

			// STATUS BAR
			'statusBar.background': colors.background.hex(),
			'statusBar.foreground': colors.foreground.hex(),
			'statusBar.border': bordered ? colors.color8.hex() + '33' : colors.background.hex(),
			'statusBar.debuggingBackground': colors.color3.hex(),
			'statusBar.debuggingForeground': colors.background.hex() + 'dd',
			'statusBar.noFolderBackground': colors.background.lighten(0.2).hex(),
			'statusBarItem.activeBackground': '#00000050',
			'statusBarItem.hoverBackground': '#00000030',
			'statusBarItem.prominentBackground': colors.color8.hex() + '33',
			'statusBarItem.prominentHoverBackground': '#00000030',

			// TITLE BAR
			'titleBar.activeBackground': colors.background.hex(),
			'titleBar.activeForeground': colors.foreground.hex(),
			'titleBar.inactiveBackground': colors.background.hex(),
			'titleBar.inactiveForeground': colors.foreground.hex(),
			'titleBar.border': bordered ? colors.color8.hex() + '33' : colors.background.hex(),

			// MENU BAR
			// 'menubar.selectionForeground': '?',
			// 'menubar.selectionBackground': '?',
			// 'menubar.selectionBorder': '?',
			// 'menu.foreground': '?',
			// 'menu.background': '?',
			// 'menu.selectionForeground': '?',
			// 'menu.selectionBackground': '?',
			// 'menu.selectionBorder': '?',

			// NOTIFICATION
			// 'notificationCenter.border': '?',
			// 'notificationCenterHeader.foreground': '?',
			// 'notificationCenterHeader.background': '?',
			// 'notificationToast.border': '?',
			// 'notifications.foreground': '?',
			// 'notifications.background': '?',
			// 'notifications.border': '?',
			// 'notificationLink.foreground': '?',

			// EXTENSIONS
			'extensionButton.prominentForeground': colors.background.hex(),
			'extensionButton.prominentBackground': colors.color1.hex(),
			'extensionButton.prominentHoverBackground': colors.color1.hex() + 'b3',

			// QUICK PICKER
			'pickerGroup.border': colors.color8.hex() + '33',
			'pickerGroup.foreground': colors.foreground.hex() + 'b3',

			// DEBUG
			'debugToolBar.background': colors.background.hex(),
			// 'debugToolBar.border': '',

			// WELCOME PAGE
			// 'welcomePage.buttonBackground': '?'
			// 'welcomePage.buttonHoverBackground': '?'
			'walkThrough.embeddedEditorBackground': colors.background.lighten(0.2).hex(),

			// GIT
			'gitDecoration.modifiedResourceForeground': colors.color3.hex() + 'cc',
			'gitDecoration.deletedResourceForeground': colors.color4.hex() + 'cc',
			'gitDecoration.untrackedResourceForeground': colors.color2.hex() + 'cc',
			'gitDecoration.ignoredResourceForeground': colors.foreground.hex() + '66',
			// 'gitDecoration.conflictingResourceForeground': '?',
			'gitDecoration.submoduleResourceForeground': colors.color13.hex() + 'b0',

			// Settings
			'settings.headerForeground': colors.foreground.hex(),
			'settings.modifiedItemIndicator': colors.color2.hex(),

			// TERMINAL
			'terminal.background': bordered ? colors.backgroundDarken.hex() : colors.background.hex(),
			'terminal.foreground': colors.foreground.hex(),
			'terminal.ansiBlack': colors.background.hex(),

			'terminal.ansiRed': colors.color1.hex(),
			'terminal.ansiGreen': colors.color2.hex(),
			'terminal.ansiYellow': colors.color3.hex(),
			'terminal.ansiBlue': colors.color4.hex(),
			'terminal.ansiMagenta': colors.color5.hex(),
			'terminal.ansiCyan': colors.color6.hex(),
			'terminal.ansiWhite': colors.color7.hex(), // was foreground?
			'terminal.ansiBrightBlack': colors.color8.hex(),
			'terminal.ansiBrightRed': colors.color9.hex(),
			'terminal.ansiBrightGreen': colors.color10.hex(),
			'terminal.ansiBrightYellow': colors.color11.hex(),
			'terminal.ansiBrightBlue': colors.color12.hex(),
			'terminal.ansiBrightMagenta': colors.color13.hex(),
			'terminal.ansiBrightCyan': colors.color14.hex(),
			'terminal.ansiBrightWhite': colors.color15.hex(),
		},
		tokenColors: [
			{
				settings: {
					background: colors.background.hex(),
					foreground: colors.foreground.hex(),
				},
			},
			{
				name: 'Comment',
				scope: ['comment'],
				settings: {
					foreground: colors.color8.hex() + 'b0',
				},
			},

			{
				name: 'String',
				scope: ['string', 'constant.other.symbol'],
				settings: {
					foreground: colors.color2.hex(),
				},
			},
			{
				name: 'Regular Expressions and Escape Characters',
				scope: ['string.regexp', 'constant.character', 'constant.other'],
				settings: {
					foreground: colors.color14.hex(),
				},
			},

			{
				name: 'Number',
				scope: ['constant.numeric'],
				settings: {
					foreground: colors.color13.hex(), // was color 1
				},
			},
			{
				name: 'Built-in constants',
				scope: ['constant.language'],
				settings: {
					foreground: colors.foreground.hex(),
				},
			},
			{
				name: 'Variable Declaration',
				scope: ['variable.other.declaration'],
				settings: {
					foreground: colors.foreground.hex(),
				},
			},
			{
				name: 'Variable Usage',
				scope: ['variable.other.readwrite', 'variable.other.object'],
				settings: {
					foreground: colors.color14.hex(),
				},
			},
			{
				name: 'Member Variable',
				scope: ['variable.member'],
				settings: {
					foreground: colors.color1.hex(),
				},
			},
			{
				name: 'Object Property Key (general)',
				scope: ['meta.object-literal.key', 'meta.object.member', 'entity.name.property', 'support.property'],
				settings: {
					foreground: colors.color11.hex(),
				},
			},
			{
				name: 'Language variable',
				scope: ['variable.language'],
				settings: {
					fontStyle: 'italic',
					foreground: colors.color2.hex(),
				},
			},

			// ------
			// Keywords
			{
				name: 'Storage',
				scope: ['storage'],
				settings: {
					foreground: colors.color11.hex(),
				},
			},
			{
				name: 'Keyword',
				scope: ['keyword'],
				settings: {
					foreground: colors.color5.hex(),
				},
			},

			// ------
			// Operators
			{
				name: 'Operators',
				scope: ['keyword.operator'],
				settings: {
					foreground: colors.color1.hex(),
				},
			},
			{
				name: 'Storage Modifier',
				scope: ['storage.modifier'],
				settings: {
					foreground: colors.color5.hex(),
				},
			},

			// ------
			// Punctuation
			{
				name: 'Separators like ; or ,',
				scope: ['punctuation.separator', 'punctuation.terminator'],
				settings: {
					foreground: colors.foreground.hex() + 'b0',
				},
			},
			{
				name: 'Punctuation',
				scope: ['punctuation.section'],
				settings: {
					foreground: colors.foreground.hex(),
				},
			},
			{
				name: 'Accessor',
				scope: ['punctuation.accessor'],
				settings: {
					foreground: colors.color3.hex(),
				},
			},

			// ------
			// Types
			{
				name: 'Types fixes',
				scope: ['source.java storage.type', 'source.haskell storage.type', 'source.c storage.type'],
				settings: {
					foreground: colors.color12.hex(),
				},
			},
			{
				name: 'Inherited class type',
				scope: ['entity.other.inherited-class'],
				settings: {
					foreground: colors.color2.hex(),
				},
			},
			// Fixes
			{
				name: 'Lambda arrow',
				scope: ['storage.type.function'],
				settings: {
					foreground: colors.color5.hex(),
				},
			},
			{
				name: 'Java primitive variable types',
				scope: ['source.java storage.type.primitive'],
				settings: {
					foreground: colors.color2.hex(),
				},
			},

			// ------
			// Function/method names in definitions
			// and calls

			{
				name: 'Function name',
				scope: [
					'entity.name.function',
					'entity.name.function.declaration',
					'meta.function entity.name.function',
					'meta.function.declaration entity.name.function',
				],
				settings: {
					foreground: colors.foreground.hex(),
				},
			},
			{
				name: 'Function arguments',
				scope: ['variable.parameter', 'meta.parameter'],
				settings: {
					foreground: colors.foreground.hex(),
				},
			},
			{
				name: 'Function call',
				scope: ['variable.function', 'variable.annotation', 'meta.function-call', 'source.function-call', 'support.function.go'],
				settings: {
					foreground: colors.color11.hex(),
				},
			},
			{
				name: 'Function call',
				scope: ['meta.function-call variable.function', 'meta.function-call support.function', 'meta.function-call entity.name.function'],
				settings: {
					foreground: colors.color11.hex(),
				},
			},
			{
				name: 'Library function',
				scope: ['support.function', 'support.macro'],
				settings: {
					foreground: colors.color11.hex(),
				},
			},

			// ------
			// Import/export paths
			{
				name: 'Imports and packages',
				scope: ['entity.name.import', 'entity.name.package'],
				settings: {
					foreground: colors.color10.hex(),
				},
			},
			{
				name: 'Entity name',
				scope: ['entity.name'],
				settings: {
					foreground: colors.color12.hex(),
				},
			},

			// Tag and their attributes
			{
				name: 'Tag',
				scope: ['entity.name.tag', 'meta.tag.sgml'],
				settings: {
					foreground: colors.color2.hex(),
				},
			},
			{
				name: 'Tag start/end',
				scope: ['punctuation.definition.tag.end', 'punctuation.definition.tag.begin', 'punctuation.definition.tag'],
				settings: {
					foreground: colors.color2.hex() + '77',
				},
			},
			{
				name: 'Tag attribute',
				scope: ['entity.other.attribute-name'],
				settings: {
					foreground: colors.color11.hex(),
				},
			},

			{
				name: 'Library constant',
				scope: ['support.constant'],
				settings: {
					fontStyle: 'italic',
					foreground: colors.color3.hex(),
				},
			},
			{
				name: 'Library class/type',
				scope: ['support.type', 'support.class', 'source.go storage.type'],
				settings: {
					foreground: colors.color2.hex(),
				},
			},
			{
				name: 'Decorators/annotation',
				scope: ['meta.decorator variable.other', 'meta.decorator punctuation.decorator', 'storage.type.annotation'],
				settings: {
					foreground: colors.color13.hex(),
				},
			},
			{
				name: 'Invalid',
				scope: ['invalid'],
				settings: {
					foreground: colors.color4.hex(),
				},
			},
			{
				name: 'diff.header',
				scope: ['meta.diff', 'meta.diff.header'],
				settings: {
					foreground: colors.color13.hex(),
				},
			},
			{
				name: 'Ruby class methods',
				scope: ['source.ruby variable.other.readwrite'],
				settings: {
					foreground: colors.color11.hex(),
				},
			},
			{
				name: 'CSS tag names',
				scope: [
					'source.css entity.name.tag',
					'source.sass entity.name.tag',
					'source.scss entity.name.tag',
					'source.less entity.name.tag',
					'source.stylus entity.name.tag',
				],
				settings: {
					foreground: colors.color12.hex(),
				},
			},
			{
				name: 'CSS browser prefix',
				scope: [
					'source.css support.type',
					'source.sass support.type',
					'source.scss support.type',
					'source.less support.type',
					'source.stylus support.type',
				],
				settings: {
					foreground: colors.color8.hex() + 'b0',
				},
			},
			{
				name: 'CSS Properties',
				scope: ['support.type.property-name'],
				settings: {
					fontStyle: 'normal',
					foreground: colors.color2.hex(),
				},
			},
			{
				name: 'Search Results Nums',
				scope: ['constant.numeric.line-number.find-in-files - match'],
				settings: {
					foreground: colors.color8.hex() + 'b0',
				},
			},
			{
				name: 'Search Results Match Nums',
				scope: ['constant.numeric.line-number.match'],
				settings: {
					foreground: colors.color11.hex(),
				},
			},
			{
				name: 'Search Results Lines',
				scope: ['entity.name.filename.find-in-files'],
				settings: {
					foreground: colors.color10.hex(),
				},
			},
			{
				scope: ['message.error'],
				settings: {
					foreground: colors.color4.hex(),
				},
			},
			// ------
			// Markups
			{
				name: 'Markup heading',
				scope: ['markup.heading', 'markup.heading entity.name'],
				settings: {
					fontStyle: 'bold',
					foreground: colors.color10.hex(),
				},
			},
			{
				name: 'Markup links',
				scope: ['markup.underline.link', 'string.other.link'],
				settings: {
					foreground: colors.color2.hex(),
				},
			},
			{
				name: 'Markup Italic',
				scope: ['markup.italic'],
				settings: {
					fontStyle: 'italic',
					foreground: colors.color1.hex(),
				},
			},
			{
				name: 'Markup Bold',
				scope: ['markup.bold'],
				settings: {
					fontStyle: 'bold',
					foreground: colors.color1.hex(),
				},
			},
			{
				name: 'Markup Bold/italic',
				scope: ['markup.italic markup.bold', 'markup.bold markup.italic'],
				settings: {
					fontStyle: 'bold italic',
				},
			},
			{
				name: 'Markup Code',
				scope: ['markup.raw'],
				settings: {
					background: colors.foreground.hex() + '06',
				},
			},
			{
				name: 'Markup Code Inline',
				scope: ['markup.raw.inline'],
				settings: {
					background: colors.foreground.hex() + '10',
				},
			},
			{
				name: 'Markdown Separator',
				scope: ['meta.separator'],
				settings: {
					fontStyle: 'bold',
					background: colors.foreground.hex() + '10',
					foreground: colors.color8.hex() + 'b0',
				},
			},
			{
				name: 'Markup Blockquote',
				scope: ['markup.quote'],
				settings: {
					foreground: colors.color14.hex(),
					fontStyle: 'italic',
				},
			},
			{
				name: 'Markup List Bullet',
				scope: ['markup.list punctuation.definition.list.begin'],
				settings: {
					foreground: colors.color11.hex(),
				},
			},
			{
				name: 'Markup added',
				scope: ['markup.inserted'],
				settings: {
					foreground: colors.color2.hex(),
				},
			},
			{
				name: 'Markup modified',
				scope: ['markup.changed'],
				settings: {
					foreground: colors.color3.hex(),
				},
			},
			{
				name: 'Markup removed',
				scope: ['markup.deleted'],
				settings: {
					foreground: colors.color4.hex(),
				},
			},
			{
				name: 'Markup Strike',
				scope: ['markup.strike'],
				settings: {
					foreground: colors.color13.hex(),
				},
			},
			{
				name: 'Markup Table',
				scope: ['markup.table'],
				settings: {
					background: colors.foreground.hex() + '10',
					foreground: colors.color2.hex(),
				},
			},
			{
				name: 'Markup Raw Inline',
				scope: ['text.html.markdown markup.inline.raw'],
				settings: {
					foreground: colors.color3.hex(),
				},
			},
			{
				name: 'Markdown - Line Break',
				scope: ['text.html.markdown meta.dummy.line-break'],
				settings: {
					background: colors.color8.hex() + 'b0',
					foreground: colors.color8.hex() + 'b0',
				},
			},
			{
				name: 'Markdown - Raw Block Fenced',
				scope: ['punctuation.definition.markdown'],
				settings: {
					background: colors.foreground.hex(),
					foreground: colors.color8.hex() + 'b0',
				},
			},
		],
	};
};
