# autogen_fast/alertconfigurationapi/TestAccAlertConfiguration_withEmailToPagerDuty Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.02s
[2026-07-21 00:52](#error-2026-07-21t0052270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 17 seconds
- 2026-07-10 PASS 9 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1376066Z === RUN   TestAccAlertConfiguration_withEmailToPagerDuty
2026-07-11T00:54:31.1376734Z     resource_test.go:309: Creating execution project (1): test-acc-tf-p-1294598455590626983
2026-07-11T00:54:31.1377286Z     resource_test.go:309: 
2026-07-11T00:54:31.1378257Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1380149Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1382039Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1384099Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:309
2026-07-11T00:54:31.1385291Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1387494Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1388663Z         	Test:       	TestAccAlertConfiguration_withEmailToPagerDuty
2026-07-11T00:54:31.1390542Z         	Messages:   	Project creation failed: test-acc-tf-p-1294598455590626983, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1391846Z --- FAIL: TestAccAlertConfiguration_withEmailToPagerDuty (75.19s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 9 seconds
- 2026-07-14 PASS 8 seconds
- 2026-07-15 PASS 9 seconds
- 2026-07-16 PASS 8 seconds
- 2026-07-17 PASS 10 seconds
- 2026-07-18 PASS 8 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:27+00:00
```
2026-07-21T00:52:27.2237490Z === RUN   TestAccAlertConfiguration_withEmailToPagerDuty
2026-07-21T00:52:27.2238174Z     resource_test.go:309: Creating execution project (1): test-acc-tf-p-7325083738031216211
2026-07-21T00:52:27.2238739Z     resource_test.go:309: 
2026-07-21T00:52:27.2239832Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:27.2241678Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:27.2243531Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:27.2245747Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:309
2026-07-21T00:52:27.2246660Z         	Error:      	Received unexpected error:
2026-07-21T00:52:27.2249537Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:27.2251016Z         	Test:       	TestAccAlertConfiguration_withEmailToPagerDuty
2026-07-21T00:52:27.2253427Z         	Messages:   	Project creation failed: test-acc-tf-p-7325083738031216211, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:27.2255158Z --- FAIL: TestAccAlertConfiguration_withEmailToPagerDuty (0.56s)
```

- 2026-07-22 PASS 9 seconds
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.8996353Z === RUN   TestAccAlertConfiguration_withEmailToPagerDuty
2026-07-23T00:48:36.8996884Z     resource_test.go:309: Creating execution project (1): test-acc-tf-p-617275134751245755
2026-07-23T00:48:36.8997316Z     resource_test.go:309: 
2026-07-23T00:48:36.8998079Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.8999515Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.9000953Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.9002662Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:309
2026-07-23T00:48:36.9003394Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.9005640Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.9006784Z         	Test:       	TestAccAlertConfiguration_withEmailToPagerDuty
2026-07-23T00:48:36.9008653Z         	Messages:   	Project creation failed: test-acc-tf-p-617275134751245755, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.9009893Z --- FAIL: TestAccAlertConfiguration_withEmailToPagerDuty (0.47s)
```

- 2026-07-24 PASS 10 seconds
- 2026-07-25 PASS 9 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 13 seconds
- 2026-07-28 PASS 9 seconds
- 2026-07-29 PASS 10 seconds
- 2026-07-30 PASS 10 seconds
- 2026-07-31 PASS 9 seconds
- 2026-08-01 PASS 9 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 10 seconds
- 2026-08-04 PASS 9 seconds
- 2026-08-05 PASS 10 seconds
- 2026-08-06 PASS 10 seconds
- 2026-08-07 PASS 10 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 9 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 11 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 10 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 9 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 10 seconds
  - PASS 10 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 13 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
