# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_withSeverityOverride Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-11 00:54](#error-2026-07-11t0054310000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s
[2026-07-21 00:52](#error-2026-07-21t0052270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.07s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 9 seconds
- 2026-07-10 PASS 6 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1430798Z === RUN   TestAccAlertConfigurationAPI_withSeverityOverride
2026-07-11T00:54:31.1431613Z     resource_test.go:391: Creating execution project (1): test-acc-tf-p-7972820174831129502
2026-07-11T00:54:31.1432266Z     resource_test.go:391: 
2026-07-11T00:54:31.1433452Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1435826Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1438072Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1440474Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:391
2026-07-11T00:54:31.1441566Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1444927Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:54:31.1446845Z         	Test:       	TestAccAlertConfigurationAPI_withSeverityOverride
2026-07-11T00:54:31.1449711Z         	Messages:   	Project creation failed: test-acc-tf-p-7972820174831129502, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:54:31.1451751Z --- FAIL: TestAccAlertConfigurationAPI_withSeverityOverride (0.20s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 6 seconds
- 2026-07-14 PASS 5 seconds
- 2026-07-15 PASS 5 seconds
- 2026-07-16 PASS 5 seconds
- 2026-07-17 PASS 7 seconds
- 2026-07-18 PASS 5 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:27+00:00
```
2026-07-21T00:52:27.2291835Z === RUN   TestAccAlertConfigurationAPI_withSeverityOverride
2026-07-21T00:52:27.2292507Z     resource_test.go:391: Creating execution project (1): test-acc-tf-p-8506754455956632532
2026-07-21T00:52:27.2293073Z     resource_test.go:391: 
2026-07-21T00:52:27.2294034Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:27.2295984Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:27.2297828Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:27.2299846Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:391
2026-07-21T00:52:27.2300768Z         	Error:      	Received unexpected error:
2026-07-21T00:52:27.2303642Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:27.2305255Z         	Test:       	TestAccAlertConfigurationAPI_withSeverityOverride
2026-07-21T00:52:27.2307913Z         	Messages:   	Project creation failed: test-acc-tf-p-8506754455956632532, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:27.2309553Z --- FAIL: TestAccAlertConfigurationAPI_withSeverityOverride (0.67s)
```

- 2026-07-22 PASS 5 seconds
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.9038753Z === RUN   TestAccAlertConfigurationAPI_withSeverityOverride
2026-07-23T00:48:36.9039296Z     resource_test.go:391: Creating execution project (1): test-acc-tf-p-5027862280053468835
2026-07-23T00:48:36.9039718Z     resource_test.go:391: 
2026-07-23T00:48:36.9040473Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.9041911Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.9043535Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.9045145Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:391
2026-07-23T00:48:36.9045990Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.9048257Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.9049423Z         	Test:       	TestAccAlertConfigurationAPI_withSeverityOverride
2026-07-23T00:48:36.9051439Z         	Messages:   	Project creation failed: test-acc-tf-p-5027862280053468835, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.9052865Z --- FAIL: TestAccAlertConfigurationAPI_withSeverityOverride (0.22s)
```

- 2026-07-24 PASS 6 seconds
- 2026-07-25 PASS 6 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 5 seconds
- 2026-07-28 PASS 6 seconds
- 2026-07-29 PASS 10 seconds
- 2026-07-30 PASS 11 seconds
- 2026-07-31 PASS 10 seconds
- 2026-08-01 PASS 10 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 11 seconds
- 2026-08-04 PASS 10 seconds
- 2026-08-05 PASS 11 seconds
- 2026-08-06 PASS 11 seconds
- 2026-08-07 PASS 11 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 7 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 6 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 6 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 6 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 12 seconds
  - PASS 10 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 16 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
