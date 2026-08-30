"""
Utility functions for basic mathematical operations.
"""

def add(a, b):
    """Return the sum of two numbers."""
    return a + b

def subtract(a, b):
    """Return the difference between two numbers."""
    return a - b

def multiply(a, b):
    """Return the product of two numbers."""
    return a * b

def division(a, b):
    """Return the division result and handle division by zero."""
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: Cannot divide by zero."
