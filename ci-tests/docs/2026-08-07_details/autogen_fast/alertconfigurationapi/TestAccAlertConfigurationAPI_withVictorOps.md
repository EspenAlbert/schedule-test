# autogen_fast/alertconfigurationapi/TestAccAlertConfigurationAPI_withVictorOps Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-11 00:54](#error-2026-07-11t0054310000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s
[2026-07-21 00:52](#error-2026-07-21t0052270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.07s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 7 seconds
- 2026-07-10 PASS 6 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1410744Z === RUN   TestAccAlertConfigurationAPI_withVictorOps
2026-07-11T00:54:31.1411403Z     resource_test.go:369: Creating execution project (1): test-acc-tf-p-8760237370404852377
2026-07-11T00:54:31.1411967Z     resource_test.go:369: 
2026-07-11T00:54:31.1412940Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1414827Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1416873Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1418941Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:369
2026-07-11T00:54:31.1419945Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1423124Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:54:31.1425062Z         	Test:       	TestAccAlertConfigurationAPI_withVictorOps
2026-07-11T00:54:31.1428235Z         	Messages:   	Project creation failed: test-acc-tf-p-8760237370404852377, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:54:31.1430097Z --- FAIL: TestAccAlertConfigurationAPI_withVictorOps (0.28s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 6 seconds
- 2026-07-14 PASS 5 seconds
- 2026-07-15 PASS 6 seconds
- 2026-07-16 PASS 5 seconds
- 2026-07-17 PASS 5 seconds
- 2026-07-18 PASS 4 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:27+00:00
```
2026-07-21T00:52:27.2273689Z === RUN   TestAccAlertConfigurationAPI_withVictorOps
2026-07-21T00:52:27.2274358Z     resource_test.go:369: Creating execution project (1): test-acc-tf-p-3245566811520172285
2026-07-21T00:52:27.2275246Z     resource_test.go:369: 
2026-07-21T00:52:27.2276236Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:27.2278086Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:27.2279931Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:27.2281948Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:369
2026-07-21T00:52:27.2282847Z         	Error:      	Received unexpected error:
2026-07-21T00:52:27.2285828Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:27.2287314Z         	Test:       	TestAccAlertConfigurationAPI_withVictorOps
2026-07-21T00:52:27.2289747Z         	Messages:   	Project creation failed: test-acc-tf-p-3245566811520172285, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:27.2291324Z --- FAIL: TestAccAlertConfigurationAPI_withVictorOps (0.75s)
```

- 2026-07-22 PASS 6 seconds
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.9024611Z === RUN   TestAccAlertConfigurationAPI_withVictorOps
2026-07-23T00:48:36.9025131Z     resource_test.go:369: Creating execution project (1): test-acc-tf-p-9187421069831023702
2026-07-23T00:48:36.9025554Z     resource_test.go:369: 
2026-07-23T00:48:36.9026315Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.9027755Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.9029195Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.9030775Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/alertconfigurationapi/resource_test.go:369
2026-07-23T00:48:36.9031559Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.9034011Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.9035197Z         	Test:       	TestAccAlertConfigurationAPI_withVictorOps
2026-07-23T00:48:36.9037108Z         	Messages:   	Project creation failed: test-acc-tf-p-9187421069831023702, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.9038353Z --- FAIL: TestAccAlertConfigurationAPI_withVictorOps (0.42s)
```

- 2026-07-24 PASS 6 seconds
- 2026-07-25 PASS 6 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 8 seconds
- 2026-07-28 PASS 6 seconds
- 2026-07-29 PASS 6 seconds
- 2026-07-30 PASS 6 seconds
- 2026-07-31 PASS 6 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 6 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS 6 seconds
- 2026-08-06 PASS 5 seconds
- 2026-08-07 PASS 6 seconds

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
  - PASS 6 seconds
  - PASS 5 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 7 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
