namespace Userservice.Dtos
{
    public record UserDto(Guid Id, string Fullname, string Email, string Password);
    public record CreateUserDto(string FullName, string Email, string Password);
    public record UpdateUserDto(string FullName, string Email, string Password);

    public record LoginUserDto(string Email, string Password);



}