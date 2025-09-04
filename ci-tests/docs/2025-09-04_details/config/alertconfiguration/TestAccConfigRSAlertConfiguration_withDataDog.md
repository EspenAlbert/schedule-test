# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withDataDog Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 4 seconds
- 2025-08-07 PASS 35 seconds
- 2025-08-08 PASS 4 seconds
- 2025-08-09 PASS 5 seconds
- 2025-08-10 PASS 5 seconds
- 2025-08-11 PASS 6 seconds
- 2025-08-12 PASS 4 seconds
- 2025-08-13 PASS 3 seconds
- 2025-08-14 PASS 4 seconds
- 2025-08-15 PASS 5 seconds
- 2025-08-16 PASS 4 seconds
- 2025-08-17 PASS 5 seconds
- 2025-08-18 PASS 4 seconds
- 2025-08-19 PASS 6 seconds
- 2025-08-20
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-08-21 PASS 4 seconds
- 2025-08-22 PASS 4 seconds
- 2025-08-23 PASS 5 seconds
- 2025-08-24 PASS 4 seconds
- 2025-08-25 PASS 6 seconds
- 2025-08-26 PASS 5 seconds
- 2025-08-27 PASS 5 seconds
- 2025-08-28 PASS 4 seconds
- 2025-08-29 PASS 6 seconds
- 2025-08-30 PASS 4 seconds
- 2025-08-31 PASS 5 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.0226488Z === RUN   TestAccConfigRSAlertConfiguration_withDataDog
2025-09-01T00:31:13.0227510Z     resource_test.go:371: Creating execution project: test-acc-tf-p-8587958715315761155
2025-09-01T00:31:13.0228584Z     resource_test.go:371: 
2025-09-01T00:31:13.0230366Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:13.0233625Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:13.0237151Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:378
2025-09-01T00:31:13.0240885Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:371
2025-09-01T00:31:13.0242342Z         	Error:      	Received unexpected error:
2025-09-01T00:31:13.0247378Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.0280026Z         	Test:       	TestAccConfigRSAlertConfiguration_withDataDog
2025-09-01T00:31:13.0284231Z         	Messages:   	Project creation failed: test-acc-tf-p-8587958715315761155, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.0286955Z --- FAIL: TestAccConfigRSAlertConfiguration_withDataDog (0.16s)
```

  - PASS 3 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-09-02 PASS 5 seconds
- 2025-09-03 PASS 5 seconds
- 2025-09-04 PASS 4 seconds