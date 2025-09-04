# config/alertconfiguration/TestMigConfigRSAlertConfiguration_withEmptyOptionalAttributes Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 00:31](#error-2025-09-01t0031120000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 18 seconds
- 2025-08-07 PASS 25 seconds
- 2025-08-08 PASS 20 seconds
- 2025-08-09 PASS 18 seconds
- 2025-08-10 PASS 17 seconds
- 2025-08-11 PASS 18 seconds
- 2025-08-12 PASS 17 seconds
- 2025-08-13 PASS 18 seconds
- 2025-08-14 PASS 19 seconds
- 2025-08-15 PASS 17 seconds
- 2025-08-16 PASS 18 seconds
- 2025-08-17 PASS 18 seconds
- 2025-08-18 PASS 18 seconds
- 2025-08-19 PASS 18 seconds
- 2025-08-20
  - PASS 17 seconds
  - PASS 17 seconds
- 2025-08-21 PASS 18 seconds
- 2025-08-22 PASS 17 seconds
- 2025-08-23 PASS 18 seconds
- 2025-08-24 PASS 15 seconds
- 2025-08-25 PASS 17 seconds
- 2025-08-26 PASS 30 seconds
- 2025-08-27 PASS 28 seconds
- 2025-08-28 PASS 16 seconds
- 2025-08-29 PASS 18 seconds
- 2025-08-30 PASS 18 seconds
- 2025-08-31 PASS 15 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:12+00:00
```
2025-09-01T00:31:12.9524519Z === RUN   TestMigConfigRSAlertConfiguration_withEmptyOptionalAttributes
2025-09-01T00:31:12.9525632Z     resource_migration_test.go:125: Creating execution project: test-acc-tf-p-4045826692628155132
2025-09-01T00:31:12.9526461Z     resource_migration_test.go:125: 
2025-09-01T00:31:12.9528009Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:12.9561333Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:12.9565008Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_migration_test.go:125
2025-09-01T00:31:12.9566441Z         	Error:      	Received unexpected error:
2025-09-01T00:31:12.9571149Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:12.9573489Z         	Test:       	TestMigConfigRSAlertConfiguration_withEmptyOptionalAttributes
2025-09-01T00:31:12.9577318Z         	Messages:   	Project creation failed: test-acc-tf-p-4045826692628155132, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:12.9579982Z --- FAIL: TestMigConfigRSAlertConfiguration_withEmptyOptionalAttributes (0.15s)
```

  - PASS 18 seconds
  - PASS 20 seconds
  - PASS 19 seconds
  - PASS 17 seconds
  - PASS 19 seconds
  - PASS 33 seconds
  - PASS 26 seconds
- 2025-09-02 PASS 17 seconds
- 2025-09-03 PASS 16 seconds
- 2025-09-04 PASS 18 seconds