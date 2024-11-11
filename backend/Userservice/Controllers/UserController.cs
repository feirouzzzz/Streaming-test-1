using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Userservice.Dtos;

namespace UserService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        // For demonstration, we'll use an in-memory list of users.
        // Replace this with a database or other data source in a real application.
        private static readonly List<UserDto> Users = new(){
            new UserDto(Guid.NewGuid(), "HH", "Email", "Pass")
        };

        [HttpGet]
        public ActionResult<IEnumerable<UserDto>> GetUsers()
        {
            return Ok(Users);
        }

        [HttpGet("{id}")]
        public ActionResult<UserDto> GetUserById(Guid id)
        {
            var user = Users.FirstOrDefault(u => u.Id == id);
            if (user == null) return NotFound();

            return Ok(user);
        }

        [HttpPost]
        public ActionResult<UserDto> CreateUser(CreateUserDto createUserDto)
        {
            var user = new UserDto(Guid.NewGuid(), createUserDto.FullName, createUserDto.Email, createUserDto.Password);
            Users.Add(user);
            return CreatedAtAction(nameof(GetUserById), new { id = user.Id }, user);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateUser(Guid id, UpdateUserDto updateUserDto)
        {
            var userIndex = Users.FindIndex(u => u.Id == id);
            if (userIndex == -1) return NotFound();

            var updatedUser = new UserDto(id, updateUserDto.FullName, updateUserDto.Email, updateUserDto.Password);
            Users[userIndex] = updatedUser;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser(Guid id)
        {
            var userIndex = Users.FindIndex(u => u.Id == id);
            if (userIndex == -1) return NotFound();

            Users.RemoveAt(userIndex);

            return NoContent();
        }

        [HttpPost("/login")]
        public ActionResult<UserDto> LoginUser(LoginUserDto LoginUserDto)
        {
            var user = Users.FirstOrDefault(user => user.Email == LoginUserDto.Email);

            if (LoginUserDto.Password == user.Password)
            {
                return Ok(user);
            }

            return NotFound();
        }
    }
}
