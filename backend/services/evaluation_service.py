def evaluate_answer(answer):
    words = len(answer.strip().split()) if answer.strip() else 0

    if words >= 30:
        return 20
    if words >= 20:
        return 17
    if words >= 10:
        return 14
    if words >= 5:
        return 10
    return 5
