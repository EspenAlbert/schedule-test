# config/alertconfiguration/TestAccConfigRSAlertConfiguration_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:31](#error-2025-09-01t0031120000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 17 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 18 seconds
- 2025-08-09 PASS 18 seconds
- 2025-08-10 PASS 17 seconds
- 2025-08-11 PASS 19 seconds
- 2025-08-12 PASS 16 seconds
- 2025-08-13 PASS 18 seconds
- 2025-08-14 PASS 18 seconds
- 2025-08-15 PASS 17 seconds
- 2025-08-16 PASS 17 seconds
- 2025-08-17 PASS 17 seconds
- 2025-08-18 PASS 17 seconds
- 2025-08-19 PASS 18 seconds
- 2025-08-20
  - PASS 17 seconds
  - PASS 18 seconds
- 2025-08-21 PASS 17 seconds
- 2025-08-22 PASS 18 seconds
- 2025-08-23 PASS 17 seconds
- 2025-08-24 PASS 15 seconds
- 2025-08-25 PASS 18 seconds
- 2025-08-26 PASS 25 seconds
- 2025-08-27 PASS 24 seconds
- 2025-08-28 PASS 15 seconds
- 2025-08-29 PASS 18 seconds
- 2025-08-30 PASS 17 seconds
- 2025-08-31 PASS 15 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:12+00:00
```
2025-09-01T00:31:12.9639402Z === RUN   TestAccConfigRSAlertConfiguration_basic
2025-09-01T00:31:12.9640470Z     resource_test.go:28: Creating execution project: test-acc-tf-p-3005641167252766275
2025-09-01T00:31:12.9641180Z     resource_test.go:28: 
2025-09-01T00:31:12.9642649Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:12.9645589Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:12.9648734Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:28
2025-09-01T00:31:12.9685085Z         	Error:      	Received unexpected error:
2025-09-01T00:31:12.9689788Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:12.9691921Z         	Test:       	TestAccConfigRSAlertConfiguration_basic
2025-09-01T00:31:12.9695673Z         	Messages:   	Project creation failed: test-acc-tf-p-3005641167252766275, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:12.9698033Z --- FAIL: TestAccConfigRSAlertConfiguration_basic (0.16s)
```

  - PASS 17 seconds
  - PASS 20 seconds
  - PASS 19 seconds
  - PASS 17 seconds
  - PASS 17 seconds
  - PASS 28 seconds
  - PASS 21 seconds
- 2025-09-02 PASS 16 seconds
- 2025-09-03 PASS 16 seconds
- 2025-09-04 PASS 16 seconds