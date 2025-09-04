# stream/streamprocessor/TestMigStreamProcessor_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 12 seconds
- 2025-08-07
  - PASS a minute
  - PASS 15 seconds
- 2025-08-08 PASS 11 seconds
- 2025-08-09 PASS 9 seconds
- 2025-08-10 PASS 16 seconds
- 2025-08-11 PASS 10 seconds
- 2025-08-12
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-08-13 PASS 11 seconds
- 2025-08-14 PASS 9 seconds
- 2025-08-15 PASS 11 seconds
- 2025-08-16 PASS 10 seconds
- 2025-08-17 PASS 11 seconds
- 2025-08-18
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-08-19 PASS 16 seconds
- 2025-08-20
  - PASS 12 seconds
  - PASS 11 seconds
- 2025-08-21 PASS 13 seconds
- 2025-08-22 PASS 13 seconds
- 2025-08-23 PASS 12 seconds
- 2025-08-24 PASS 13 seconds
- 2025-08-25 PASS 11 seconds
- 2025-08-26 PASS 10 seconds
- 2025-08-27 PASS 18 seconds
- 2025-08-28 PASS 11 seconds
- 2025-08-29
  - PASS 11 seconds
  - PASS 9 seconds
- 2025-08-30 PASS 12 seconds
- 2025-08-31 PASS 12 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.8989290Z === RUN   TestMigStreamProcessor_basic
2025-09-01T00:30:38.8990678Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-9076248445376260547
2025-09-01T00:30:38.8991598Z     resource_migration_test.go:11: 
2025-09-01T00:30:38.8993276Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.8996700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.9000009Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.9003477Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:49
2025-09-01T00:30:38.9007329Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_migration_test.go:11
2025-09-01T00:30:38.9009619Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:38.9010679Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.9015753Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9048709Z         	Test:       	TestMigStreamProcessor_basic
2025-09-01T00:30:38.9052897Z         	Messages:   	Project creation failed: test-acc-tf-p-9076248445376260547, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9055530Z --- FAIL: TestMigStreamProcessor_basic (0.30s)
```

  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 13 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-09-02 PASS 13 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 11 seconds