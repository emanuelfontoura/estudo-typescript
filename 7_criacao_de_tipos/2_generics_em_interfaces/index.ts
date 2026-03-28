interface ApiResponseSuccess<T>{
    success: true
    data: T
}

interface ApiResponseFailed<T>{
    success: false
    error: T
}