# encryption/encryptionatrest/TestAccEncryptionAtRest_basicAzure Test Details
# Found 40 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 39) FAIL
Success rate: 97.50%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030300000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 5 seconds
- 2025-08-07 PASS 49 seconds
- 2025-08-08 PASS 10 seconds
- 2025-08-09 PASS 5 seconds
- 2025-08-10 PASS 6 seconds
- 2025-08-11 PASS 7 seconds
- 2025-08-12 PASS 5 seconds
- 2025-08-13 PASS 5 seconds
- 2025-08-14 PASS 7 seconds
- 2025-08-15 PASS 5 seconds
- 2025-08-16 PASS 7 seconds
- 2025-08-17 PASS 4 seconds
- 2025-08-18 PASS 7 seconds
- 2025-08-19 PASS 4 seconds
- 2025-08-20
  - PASS 5 seconds
  - PASS 7 seconds
- 2025-08-21 PASS 4 seconds
- 2025-08-22 PASS 6 seconds
- 2025-08-23 PASS 8 seconds
- 2025-08-24 PASS 4 seconds
- 2025-08-25 PASS 8 seconds
- 2025-08-26 PASS 9 seconds
- 2025-08-27 PASS 7 seconds
- 2025-08-28 PASS 4 seconds
- 2025-08-29
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS a minute
- 2025-08-30 PASS 6 seconds
- 2025-08-31 PASS 5 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:30+00:00
```
2025-09-01T00:30:30.9156446Z === RUN   TestAccEncryptionAtRest_basicAzure
2025-09-01T00:30:30.9157013Z     resource_test.go:82: Creating execution project: test-acc-tf-p-5700585318467567617
2025-09-01T00:30:30.9157517Z     resource_test.go:82: 
2025-09-01T00:30:30.9158439Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:30.9160412Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:30.9162317Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:82
2025-09-01T00:30:30.9163133Z         	Error:      	Received unexpected error:
2025-09-01T00:30:30.9166045Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:30.9167679Z         	Test:       	TestAccEncryptionAtRest_basicAzure
2025-09-01T00:30:30.9170184Z         	Messages:   	Project creation failed: test-acc-tf-p-5700585318467567617, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:30.9171686Z --- FAIL: TestAccEncryptionAtRest_basicAzure (0.06s)
```

  - PASS 4 seconds
  - PASS 6 seconds
  - PASS 18 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 5 seconds
- 2025-09-03 PASS 5 seconds
- 2025-09-04 PASS 4 seconds