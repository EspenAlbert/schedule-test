# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withOpsGenie Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 10 seconds
- 2025-08-07 PASS 16 seconds
- 2025-08-08 PASS 10 seconds
- 2025-08-09 PASS 9 seconds
- 2025-08-10 PASS 9 seconds
- 2025-08-11 PASS 10 seconds
- 2025-08-12 PASS 9 seconds
- 2025-08-13 PASS 10 seconds
- 2025-08-14 PASS 11 seconds
- 2025-08-15 PASS 9 seconds
- 2025-08-16 PASS 10 seconds
- 2025-08-17 PASS 9 seconds
- 2025-08-18 PASS 9 seconds
- 2025-08-19 PASS 10 seconds
- 2025-08-20
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-08-21 PASS 10 seconds
- 2025-08-22 PASS 11 seconds
- 2025-08-23 PASS 9 seconds
- 2025-08-24 PASS 9 seconds
- 2025-08-25 PASS 10 seconds
- 2025-08-26 PASS 8 seconds
- 2025-08-27 PASS 9 seconds
- 2025-08-28 PASS 9 seconds
- 2025-08-29 PASS 11 seconds
- 2025-08-30 PASS 10 seconds
- 2025-08-31 PASS 8 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.0404635Z === RUN   TestAccConfigRSAlertConfiguration_withOpsGenie
2025-09-01T00:31:13.0405556Z     resource_test.go:527: Creating execution project: test-acc-tf-p-578990393718827129
2025-09-01T00:31:13.0406290Z     resource_test.go:527: 
2025-09-01T00:31:13.0407787Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:13.0410892Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:13.0414019Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:527
2025-09-01T00:31:13.0415317Z         	Error:      	Received unexpected error:
2025-09-01T00:31:13.0419884Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.0422262Z         	Test:       	TestAccConfigRSAlertConfiguration_withOpsGenie
2025-09-01T00:31:13.0425986Z         	Messages:   	Project creation failed: test-acc-tf-p-578990393718827129, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.0428388Z --- FAIL: TestAccConfigRSAlertConfiguration_withOpsGenie (0.18s)
```

  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 10 seconds
- 2025-09-02 PASS 9 seconds
- 2025-09-03 PASS 10 seconds
- 2025-09-04 PASS 10 seconds