# config/alertconfiguration/TestAccConfigRSAlertConfiguration_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-07-14 00:45](#error-2026-07-14t0045330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.09s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.07s
[2026-07-21 00:53](#error-2026-07-21t0053420000) |  | dev | flaky_500 | 37.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.6942362Z === RUN   TestAccConfigRSAlertConfiguration_basic
2026-07-09T00:58:00.6946919Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-7446830560015294750
2026-07-09T00:58:00.6947514Z     resource_test.go:28: 
2026-07-09T00:58:00.6948488Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.6950860Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.6954375Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.6957678Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:28
2026-07-09T00:58:00.6958557Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.6960609Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.6961768Z         	Test:       	TestAccConfigRSAlertConfiguration_basic
2026-07-09T00:58:00.6963628Z         	Messages:   	Project creation failed: test-acc-tf-p-7446830560015294750, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.6964994Z --- FAIL: TestAccConfigRSAlertConfiguration_basic (64.12s)
```

- 2026-07-10 PASS 28 seconds
- 2026-07-11 PASS 55 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 18 seconds
- 2026-07-14

### Error 2026-07-14T00:45:33+00:00
```
2026-07-14T00:45:33.0506336Z === RUN   TestAccConfigRSAlertConfiguration_basic
2026-07-14T00:45:33.0520892Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-879763326440007976
2026-07-14T00:45:33.0540597Z     resource_test.go:28: 
2026-07-14T00:45:33.0544151Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:45:33.0549059Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T00:45:33.0556747Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T00:45:33.0561707Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:28
2026-07-14T00:45:33.0564006Z         	Error:      	Received unexpected error:
2026-07-14T00:45:33.0570598Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:45:33.0574114Z         	Test:       	TestAccConfigRSAlertConfiguration_basic
2026-07-14T00:45:33.0579273Z         	Messages:   	Project creation failed: test-acc-tf-p-879763326440007976, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:45:33.0591951Z --- FAIL: TestAccConfigRSAlertConfiguration_basic (63.89s)
```

- 2026-07-15 PASS 23 seconds
- 2026-07-16 PASS 21 seconds
- 2026-07-17 PASS 38 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.7669313Z === RUN   TestAccConfigRSAlertConfiguration_basic
2026-07-18T00:51:48.7675477Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-7622405043732646585
2026-07-18T00:51:48.7676444Z     resource_test.go:28: 
2026-07-18T00:51:48.7678719Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:48.7682229Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:51:48.7685885Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:51:48.7689560Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:28
2026-07-18T00:51:48.7691050Z         	Error:      	Received unexpected error:
2026-07-18T00:51:48.7695709Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.7697135Z         	Test:       	TestAccConfigRSAlertConfiguration_basic
2026-07-18T00:51:48.7699266Z         	Messages:   	Project creation failed: test-acc-tf-p-7622405043732646585, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.7700797Z --- FAIL: TestAccConfigRSAlertConfiguration_basic (64.68s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3576032Z === RUN   TestAccConfigRSAlertConfiguration_basic
2026-07-21T00:53:42.3576663Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-8912402948868572193
2026-07-21T00:53:42.3579942Z     resource_test.go:28: 
2026-07-21T00:53:42.3580877Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3582372Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3583563Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3584956Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:28
2026-07-21T00:53:42.3585748Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3586369Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T00:53:42.3586809Z         	Test:       	TestAccConfigRSAlertConfiguration_basic
2026-07-21T00:53:42.3587520Z         	Messages:   	Project creation failed: test-acc-tf-p-8912402948868572193, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T00:53:42.3588037Z --- FAIL: TestAccConfigRSAlertConfiguration_basic (37.10s)
```

- 2026-07-22 PASS 35 seconds
- 2026-07-23 PASS 23 seconds
- 2026-07-24 PASS 32 seconds
- 2026-07-25 PASS 15 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 26 seconds
- 2026-07-28 PASS 16 seconds
- 2026-07-29 PASS 25 seconds
- 2026-07-30 PASS 13 seconds
- 2026-07-31 PASS 35 seconds
- 2026-08-01 PASS 18 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 28 seconds
- 2026-08-04 PASS 13 seconds
- 2026-08-05 PASS 29 seconds
- 2026-08-06 PASS 20 seconds
- 2026-08-07 PASS 28 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 24 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 37 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 31 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 25 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 20 seconds
  - PASS 37 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 37 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
