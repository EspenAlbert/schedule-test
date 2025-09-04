# config/alertconfiguration/TestMigConfigRSAlertConfiguration_withThreshold Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:31](#error-2025-09-01t0031120000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 18 seconds
- 2025-08-07 PASS 58 seconds
- 2025-08-08 PASS 21 seconds
- 2025-08-09 PASS 19 seconds
- 2025-08-10 PASS 18 seconds
- 2025-08-11 PASS 19 seconds
- 2025-08-12 PASS 17 seconds
- 2025-08-13 PASS 19 seconds
- 2025-08-14 PASS 19 seconds
- 2025-08-15 PASS 18 seconds
- 2025-08-16 PASS 18 seconds
- 2025-08-17 PASS 18 seconds
- 2025-08-18 PASS 18 seconds
- 2025-08-19 PASS 19 seconds
- 2025-08-20
  - PASS 19 seconds
  - PASS 19 seconds
- 2025-08-21 PASS 18 seconds
- 2025-08-22 PASS 18 seconds
- 2025-08-23 PASS 18 seconds
- 2025-08-24 PASS 16 seconds
- 2025-08-25 PASS 18 seconds
- 2025-08-26 PASS 32 seconds
- 2025-08-27 PASS 28 seconds
- 2025-08-28 PASS 18 seconds
- 2025-08-29 PASS 19 seconds
- 2025-08-30 PASS 18 seconds
- 2025-08-31 PASS 16 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:12+00:00
```
2025-09-01T00:31:12.9393885Z === RUN   TestMigConfigRSAlertConfiguration_withThreshold
2025-09-01T00:31:12.9394887Z     resource_migration_test.go:38: Creating execution project: test-acc-tf-p-2486878099807943733
2025-09-01T00:31:12.9395714Z     resource_migration_test.go:38: 
2025-09-01T00:31:12.9397210Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:12.9422459Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:12.9426940Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_migration_test.go:38
2025-09-01T00:31:12.9428332Z         	Error:      	Received unexpected error:
2025-09-01T00:31:12.9433484Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:12.9435824Z         	Test:       	TestMigConfigRSAlertConfiguration_withThreshold
2025-09-01T00:31:12.9439898Z         	Messages:   	Project creation failed: test-acc-tf-p-2486878099807943733, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:12.9442450Z --- FAIL: TestMigConfigRSAlertConfiguration_withThreshold (0.17s)
```

  - PASS 18 seconds
  - PASS 21 seconds
  - PASS 20 seconds
  - PASS 18 seconds
  - PASS 20 seconds
  - PASS 33 seconds
  - PASS 26 seconds
- 2025-09-02 PASS 18 seconds
- 2025-09-03 PASS 17 seconds
- 2025-09-04 PASS 18 seconds