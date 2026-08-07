# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withThreshold Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.04s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7078052Z === RUN   TestAccConfigRSAlertConfiguration_withThreshold
2026-07-09T00:58:00.7078691Z     resource_test.go:267: Creating execution project (1): test-acc-tf-p-4255741598528130056
2026-07-09T00:58:00.7079196Z     resource_test.go:267: 
2026-07-09T00:58:00.7080123Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7081989Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7083852Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7086124Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:267
2026-07-09T00:58:00.7086967Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7089912Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7091634Z         	Test:       	TestAccConfigRSAlertConfiguration_withThreshold
2026-07-09T00:58:00.7094187Z         	Messages:   	Project creation failed: test-acc-tf-p-4255741598528130056, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7096104Z --- FAIL: TestAccConfigRSAlertConfiguration_withThreshold (1.42s)
```

- 2026-07-10 PASS 26 seconds
- 2026-07-11 PASS 18 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 18 seconds
- 2026-07-14 PASS 14 seconds
- 2026-07-15 PASS 21 seconds
- 2026-07-16 PASS 16 seconds
- 2026-07-17 PASS 38 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.7810058Z === RUN   TestAccConfigRSAlertConfiguration_withThreshold
2026-07-18T00:51:48.7810698Z     resource_test.go:267: Creating execution project (1): test-acc-tf-p-6694031860621745336
2026-07-18T00:51:48.7811214Z     resource_test.go:267: 
2026-07-18T00:51:48.7812162Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:48.7814843Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:51:48.7818105Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:51:48.7821461Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:267
2026-07-18T00:51:48.7822881Z         	Error:      	Received unexpected error:
2026-07-18T00:51:48.7825325Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.7826495Z         	Test:       	TestAccConfigRSAlertConfiguration_withThreshold
2026-07-18T00:51:48.7828763Z         	Messages:   	Project creation failed: test-acc-tf-p-6694031860621745336, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.7830274Z --- FAIL: TestAccConfigRSAlertConfiguration_withThreshold (64.77s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3653556Z === RUN   TestAccConfigRSAlertConfiguration_withThreshold
2026-07-21T00:53:42.3653976Z     resource_test.go:267: Creating execution project (1): test-acc-tf-p-8034684175016957077
2026-07-21T00:53:42.3654319Z     resource_test.go:267: 
2026-07-21T00:53:42.3654912Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3656116Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3657255Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3658577Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:267
2026-07-21T00:53:42.3659144Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3660361Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3661068Z         	Test:       	TestAccConfigRSAlertConfiguration_withThreshold
2026-07-21T00:53:42.3662205Z         	Messages:   	Project creation failed: test-acc-tf-p-8034684175016957077, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3662999Z --- FAIL: TestAccConfigRSAlertConfiguration_withThreshold (87.73s)
```

- 2026-07-22 PASS 34 seconds
- 2026-07-23 PASS 12 seconds
- 2026-07-24 PASS 30 seconds
- 2026-07-25 PASS 13 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 23 seconds
- 2026-07-28 PASS 13 seconds
- 2026-07-29 PASS 25 seconds
- 2026-07-30 PASS 10 seconds
- 2026-07-31 PASS 34 seconds
- 2026-08-01 PASS 15 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 28 seconds
- 2026-08-04 PASS 11 seconds
- 2026-08-05 PASS 29 seconds
- 2026-08-06 PASS 17 seconds
- 2026-08-07 PASS 27 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 24 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 36 seconds
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
  - PASS 16 seconds
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
