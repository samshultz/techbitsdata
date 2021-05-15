def grouped(queryset, n):
    for i in range(0, len(queryset), n):
        yield queryset[i:i+n]