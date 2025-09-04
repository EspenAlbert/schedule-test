# encryption/encryptionatrest/TestMigEncryptionAtRest_basicAzure Test Details
# Found 40 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 39) FAIL
Success rate: 97.50%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030300000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 8 seconds
- 2025-08-07 PASS 44 seconds
- 2025-08-08 PASS 8 seconds
- 2025-08-09 PASS 10 seconds
- 2025-08-10 PASS 9 seconds
- 2025-08-11 PASS 11 seconds
- 2025-08-12 PASS 8 seconds
- 2025-08-13 PASS 9 seconds
- 2025-08-14 PASS 14 seconds
- 2025-08-15 PASS 8 seconds
- 2025-08-16 PASS 10 seconds
- 2025-08-17 PASS 7 seconds
- 2025-08-18 PASS 10 seconds
- 2025-08-19 PASS 8 seconds
- 2025-08-20
  - PASS 12 seconds
  - PASS 9 seconds
- 2025-08-21 PASS 8 seconds
- 2025-08-22 PASS 9 seconds
- 2025-08-23 PASS 13 seconds
- 2025-08-24 PASS 7 seconds
- 2025-08-25 PASS 10 seconds
- 2025-08-26 PASS 10 seconds
- 2025-08-27 PASS 27 seconds
- 2025-08-28 PASS 9 seconds
- 2025-08-29
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 10 seconds
- 2025-08-30 PASS 9 seconds
- 2025-08-31 PASS 9 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:30+00:00
```
2025-09-01T00:30:30.9138030Z === RUN   TestMigEncryptionAtRest_basicAzure
2025-09-01T00:30:30.9138973Z     resource_migration_test.go:60: Creating execution project: test-acc-tf-p-3403352586723503810
2025-09-01T00:30:30.9139527Z     resource_migration_test.go:60: 
2025-09-01T00:30:30.9140775Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:30.9142654Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:30.9144999Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_migration_test.go:60
2025-09-01T00:30:30.9145868Z         	Error:      	Received unexpected error:
2025-09-01T00:30:30.9148641Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:30.9150233Z         	Test:       	TestMigEncryptionAtRest_basicAzure
2025-09-01T00:30:30.9152637Z         	Messages:   	Project creation failed: test-acc-tf-p-3403352586723503810, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:30.9154118Z --- FAIL: TestMigEncryptionAtRest_basicAzure (0.07s)
```

  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 8 seconds
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 8 seconds