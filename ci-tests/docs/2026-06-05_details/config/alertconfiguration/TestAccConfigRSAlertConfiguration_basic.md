# config/alertconfiguration/TestAccConfigRSAlertConfiguration_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-19 01:08](#error-2026-05-19t0108200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.05s
[2026-05-21 01:07](#error-2026-05-21t0107040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.03s
[2026-05-28 01:01](#error-2026-05-28t0101560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 93.10s
[2026-06-02 01:11](#error-2026-06-02t0111000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 16 seconds
  - PASS 18 seconds
- 2026-05-08 PASS 35 seconds
- 2026-05-09 PASS 18 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 31 seconds
- 2026-05-12 PASS 22 seconds
- 2026-05-13 PASS 21 seconds
- 2026-05-14 PASS 24 seconds
- 2026-05-15 PASS 22 seconds
- 2026-05-16 PASS 51 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 18 seconds
- 2026-05-19

### Error 2026-05-19T01:08:20+00:00
```
2026-05-19T01:08:20.8421457Z === RUN   TestAccConfigRSAlertConfiguration_basic
2026-05-19T01:08:20.8423218Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-1475480044467147888
2026-05-19T01:08:20.8426439Z     resource_test.go:28: 
2026-05-19T01:08:20.8433240Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:20.8437686Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:20.8441975Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:20.8452286Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:28
2026-05-19T01:08:20.8454663Z         	Error:      	Received unexpected error:
2026-05-19T01:08:20.8459155Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:20.8461433Z         	Test:       	TestAccConfigRSAlertConfiguration_basic
2026-05-19T01:08:20.8465177Z         	Messages:   	Project creation failed: test-acc-tf-p-1475480044467147888, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:20.8467792Z --- FAIL: TestAccConfigRSAlertConfiguration_basic (74.54s)
```

- 2026-05-20 PASS 27 seconds
- 2026-05-21

### Error 2026-05-21T01:07:04+00:00
```
2026-05-21T01:07:04.6916185Z === RUN   TestAccConfigRSAlertConfiguration_basic
2026-05-21T01:07:04.6917332Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-9173803714663680071
2026-05-21T01:07:04.6918278Z     resource_test.go:28: 
2026-05-21T01:07:04.6920328Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:07:04.6923714Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:07:04.6925605Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:07:04.6927582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:28
2026-05-21T01:07:04.6928404Z         	Error:      	Received unexpected error:
2026-05-21T01:07:04.6930655Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:07:04.6932011Z         	Test:       	TestAccConfigRSAlertConfiguration_basic
2026-05-21T01:07:04.6934145Z         	Messages:   	Project creation failed: test-acc-tf-p-9173803714663680071, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:07:04.6935676Z --- FAIL: TestAccConfigRSAlertConfiguration_basic (69.27s)
```

- 2026-05-22 PASS 23 seconds
- 2026-05-23 PASS 19 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 17 seconds
- 2026-05-26 PASS 36 seconds
- 2026-05-27 PASS 37 seconds
- 2026-05-28

### Error 2026-05-28T01:01:56+00:00
```
2026-05-28T01:01:56.6941451Z === RUN   TestAccConfigRSAlertConfiguration_basic
2026-05-28T01:01:56.6942183Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-1806967008028953379
2026-05-28T01:01:56.6942926Z     resource_test.go:28: 
2026-05-28T01:01:56.6944431Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:56.6947630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:56.6951308Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:56.6954932Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:28
2026-05-28T01:01:56.6956459Z         	Error:      	Received unexpected error:
2026-05-28T01:01:56.6960153Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:56.6962751Z         	Test:       	TestAccConfigRSAlertConfiguration_basic
2026-05-28T01:01:56.6966231Z         	Messages:   	Project creation failed: test-acc-tf-p-1806967008028953379, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:56.6968313Z --- FAIL: TestAccConfigRSAlertConfiguration_basic (93.97s)
```

- 2026-05-29 PASS 37 seconds
- 2026-05-30 PASS 19 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 28 seconds
- 2026-06-02

### Error 2026-06-02T01:11:00+00:00
```
2026-06-02T01:11:00.7543906Z === RUN   TestAccConfigRSAlertConfiguration_basic
2026-06-02T01:11:00.7544727Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-6177500845452717059
2026-06-02T01:11:00.7545368Z     resource_test.go:28: 
2026-06-02T01:11:00.7546426Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:11:00.7548570Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:11:00.7550875Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:11:00.7553688Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:28
2026-06-02T01:11:00.7554737Z         	Error:      	Received unexpected error:
2026-06-02T01:11:00.7557776Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:11:00.7559146Z         	Test:       	TestAccConfigRSAlertConfiguration_basic
2026-06-02T01:11:00.7561323Z         	Messages:   	Project creation failed: test-acc-tf-p-6177500845452717059, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:11:00.7562771Z --- FAIL: TestAccConfigRSAlertConfiguration_basic (67.07s)
```

- 2026-06-03 PASS 37 seconds
- 2026-06-04 PASS a minute
- 2026-06-05 PASS 14 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 35 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 36 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 36 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 37 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
