package com.lxisoft.web.rest;

import com.lxisoft.MockTestApp;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
/**
 * Test class for the ControllerResource REST controller.
 *
 * @see ControllerResource
 */
@SpringBootTest(classes = MockTestApp.class)
public class ControllerResourceIT {

    private MockMvc restMockMvc;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);

        ControllerResource controllerResource = new ControllerResource();
        restMockMvc = MockMvcBuilders
            .standaloneSetup(controllerResource)
            .build();
    }

    /**
     * Test login
     */
    @Test
    public void testLogin() throws Exception {
        restMockMvc.perform(post("/api/controller/login"))
            .andExpect(status().isOk());
    }

    /**
     * Test create_exam
     */
    @Test
    public void testCreate_exam() throws Exception {
        restMockMvc.perform(get("/api/controller/create-exam"))
            .andExpect(status().isOk());
    }
}
