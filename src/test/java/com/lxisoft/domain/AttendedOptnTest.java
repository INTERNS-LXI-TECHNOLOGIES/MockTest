package com.lxisoft.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.lxisoft.web.rest.TestUtil;

public class AttendedOptnTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(AttendedOptn.class);
        AttendedOptn attendedOptn1 = new AttendedOptn();
        attendedOptn1.setId(1L);
        AttendedOptn attendedOptn2 = new AttendedOptn();
        attendedOptn2.setId(attendedOptn1.getId());
        assertThat(attendedOptn1).isEqualTo(attendedOptn2);
        attendedOptn2.setId(2L);
        assertThat(attendedOptn1).isNotEqualTo(attendedOptn2);
        attendedOptn1.setId(null);
        assertThat(attendedOptn1).isNotEqualTo(attendedOptn2);
    }
}
