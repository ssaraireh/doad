function getPropertyFromStyle(style, propertyName) {
    if (style contains propertyName) {
        return style.getProperty(propertyName);
    } else {
        return null;
    }
}

function markConfigPropertyIfPresent(config, propertyName) {
    if (config contains propertyName) {
        config.setPropertyMarked(propertyName);
    }
}

// Example Usage
style = getStyleForElement("button");
config = getConfigForElement("button");

value = getPropertyFromStyle(style, "color");
markConfigPropertyIfPresent(config, "border");

// Use the retrieved value and marked configuration property as needed
