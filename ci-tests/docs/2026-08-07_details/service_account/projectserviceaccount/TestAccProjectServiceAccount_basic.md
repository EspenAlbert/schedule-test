# service_account/projectserviceaccount/TestAccProjectServiceAccount_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:51](#error-2026-07-09t0051380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.04s
[2026-07-11 00:45](#error-2026-07-11t0045220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s
[2026-07-21 00:47](#error-2026-07-21t0047260000) |  | dev | flaky_500 | 41.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:51:38+00:00
```
2026-07-09T00:51:38.7891439Z === RUN   TestAccProjectServiceAccount_basic
2026-07-09T00:51:38.7894597Z     resource_test.go:23: Creating execution project (1): test-acc-tf-p-6897557608059636193
2026-07-09T00:51:38.7895197Z     resource_test.go:23: 
2026-07-09T00:51:38.7896196Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:51:38.7898378Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:51:38.7900880Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:51:38.7903007Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccount/resource_test.go:23
2026-07-09T00:51:38.7903898Z         	Error:      	Received unexpected error:
2026-07-09T00:51:38.7905981Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:38.7907082Z         	Test:       	TestAccProjectServiceAccount_basic
2026-07-09T00:51:38.7908931Z         	Messages:   	Project creation failed: test-acc-tf-p-6897557608059636193, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:38.7910332Z --- FAIL: TestAccProjectServiceAccount_basic (69.36s)
```

- 2026-07-10 PASS 10 seconds
- 2026-07-11

### Error 2026-07-11T00:45:22+00:00
```
2026-07-11T00:45:22.6542457Z === RUN   TestAccProjectServiceAccount_basic
2026-07-11T00:45:22.6545387Z     resource_test.go:23: Creating execution project (1): test-acc-tf-p-254538156408256806
2026-07-11T00:45:22.6546215Z     resource_test.go:23: 
2026-07-11T00:45:22.6547753Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:45:22.6551320Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:45:22.6554369Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:45:22.6557918Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccount/resource_test.go:23
2026-07-11T00:45:22.6559013Z         	Error:      	Received unexpected error:
2026-07-11T00:45:22.6561281Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:22.6562375Z         	Test:       	TestAccProjectServiceAccount_basic
2026-07-11T00:45:22.6564123Z         	Messages:   	Project creation failed: test-acc-tf-p-254538156408256806, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:22.6565298Z --- FAIL: TestAccProjectServiceAccount_basic (61.78s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 8 seconds
- 2026-07-14 PASS 24 seconds
- 2026-07-15 PASS 9 seconds
- 2026-07-16 PASS 12 seconds
- 2026-07-17 PASS 10 seconds
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:26+00:00
```
2026-07-21T00:47:26.1311455Z === RUN   TestAccProjectServiceAccount_basic
2026-07-21T00:47:26.1312051Z     resource_test.go:23: Creating execution project (1): test-acc-tf-p-5012610068327590004
2026-07-21T00:47:26.1312546Z     resource_test.go:23: 
2026-07-21T00:47:26.1313460Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:47:26.1315277Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:47:26.1317068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:47:26.1319321Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectserviceaccount/resource_test.go:23
2026-07-21T00:47:26.1320166Z         	Error:      	Received unexpected error:
2026-07-21T00:47:26.1321100Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T00:47:26.1321718Z         	Test:       	TestAccProjectServiceAccount_basic
2026-07-21T00:47:26.1322940Z         	Messages:   	Project creation failed: test-acc-tf-p-5012610068327590004, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T00:47:26.1323693Z --- FAIL: TestAccProjectServiceAccount_basic (41.21s)
```

- 2026-07-22 PASS 8 seconds
- 2026-07-23 PASS a minute
- 2026-07-24 PASS 8 seconds
- 2026-07-25 PASS 8 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 9 seconds
- 2026-07-28 PASS 9 seconds
- 2026-07-29
  - PASS 9 seconds
  - PASS 9 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 9 seconds
- 2026-08-01 PASS 8 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 8 seconds
- 2026-08-04 PASS 8 seconds
- 2026-08-05 PASS 11 seconds
- 2026-08-06 PASS 8 seconds
- 2026-08-07 PASS 11 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 8 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 10 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 7 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 11 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 11 seconds
  - PASS 8 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 7 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
