# search_index/searchindex/TestMigSearchIndex_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029420000) |  | qa |  | 0.01s
[2025-06-05 00:28](#error-2025-06-05t0028400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b8161ca93c1f051c65/clusters/test-acc-tf-c-3672267150810527451 | dev | flaky_500 | 184.01s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 10 minutes
- 2025-04-13 PASS 16 minutes
- 2025-04-14 PASS 12 minutes
- 2025-04-15 PASS 12 minutes
- 2025-04-16
  - PASS 10 minutes
  - PASS 16 minutes
- 2025-04-17 PASS 10 minutes
- 2025-04-18 PASS 13 minutes
- 2025-04-19 PASS 10 minutes
- 2025-04-20 PASS 13 minutes
- 2025-04-21 PASS 9 minutes
- 2025-04-22 PASS 12 minutes
- 2025-04-23 PASS 12 minutes
- 2025-04-24 PASS 12 minutes
- 2025-04-25 PASS 10 minutes
- 2025-04-26 PASS 10 minutes
- 2025-04-27 PASS 13 minutes
- 2025-04-28 PASS 11 minutes
- 2025-04-29 PASS 12 minutes
- 2025-04-30
  - PASS 10 minutes
  - PASS 14 minutes
- 2025-05-01
  - PASS 10 minutes
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 10 minutes
  - PASS 11 minutes
- 2025-05-02 PASS 12 minutes
- 2025-05-03 PASS 13 minutes
- 2025-05-04 PASS 10 minutes
- 2025-05-05 PASS 10 minutes
- 2025-05-06 PASS 12 minutes
- 2025-05-07 PASS 13 minutes
- 2025-05-08 PASS 13 minutes
- 2025-05-09 PASS 12 minutes
- 2025-05-10 PASS 10 minutes
- 2025-05-11

### Error 2025-05-11T00:29:42+00:00
```
2025-05-11T00:29:42.9446316Z === RUN   TestMigSearchIndex_basic
2025-05-11T00:29:42.9447932Z     resource_search_index_migration_test.go:11: Creating execution project: test-acc-tf-p-789951278429390800
2025-05-11T00:29:43.0374692Z     resource_search_index_migration_test.go:11: 
2025-05-11T00:29:43.0376305Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:43.0379145Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:43.0381163Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:102
2025-05-11T00:29:43.0383484Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:150
2025-05-11T00:29:43.0385727Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2025-05-11T00:29:43.0386614Z         	Error:      	Received unexpected error:
2025-05-11T00:29:43.0387775Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.0388327Z         	Test:       	TestMigSearchIndex_basic
2025-05-11T00:29:43.0389391Z         	Messages:   	Project creation failed: test-acc-tf-p-789951278429390800, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.0390088Z --- FAIL: TestMigSearchIndex_basic (0.09s)
```

- 2025-05-12 PASS 12 minutes
- 2025-05-13
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-05-14 PASS 10 minutes
- 2025-05-15 PASS 10 minutes
- 2025-05-16 PASS 12 minutes
- 2025-05-17 PASS 12 minutes
- 2025-05-18 PASS 13 minutes
- 2025-05-19 PASS 10 minutes
- 2025-05-20 PASS 12 minutes
- 2025-05-21 PASS 12 minutes
- 2025-05-22 PASS 10 minutes
- 2025-05-23 PASS 9 minutes
- 2025-05-24 PASS 14 minutes
- 2025-05-25 PASS 13 minutes
- 2025-05-26 PASS 12 minutes
- 2025-05-27 PASS 10 minutes
- 2025-05-28
  - PASS 19 minutes
  - PASS 13 minutes
- 2025-05-29 PASS 10 minutes
- 2025-05-30 PASS 10 minutes
- 2025-05-31 PASS 10 minutes
- 2025-06-01
  - PASS 10 minutes
  - PASS 12 minutes
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-06-02
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 11 minutes
- 2025-06-03 PASS 10 minutes
- 2025-06-04 PASS 12 minutes
- 2025-06-05

### Error 2025-06-05T00:28:40+00:00
```
2025-06-05T00:28:40.3229342Z === RUN   TestMigSearchIndex_basic
2025-06-05T00:28:40.3230389Z     resource_search_index_migration_test.go:11: Creating execution project: test-acc-tf-p-7790432663194988273
2025-06-05T00:28:43.5569635Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-3672267150810527451
2025-06-05T00:28:44.1473112Z 2025/06/05 00:28:44 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T00:31:44.3949377Z     resource_search_index_migration_test.go:11: 
2025-06-05T00:31:44.3951330Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T00:31:44.3955152Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T00:31:44.3959552Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:150
2025-06-05T00:31:44.3962812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2025-06-05T00:31:44.3964149Z         	Error:      	Received unexpected error:
2025-06-05T00:31:44.3966608Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b8161ca93c1f051c65/clusters/test-acc-tf-c-3672267150810527451 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:44.3967843Z         	Test:       	TestMigSearchIndex_basic
2025-06-05T00:31:44.3969896Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3672267150810527451, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b8161ca93c1f051c65/clusters/test-acc-tf-c-3672267150810527451 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:44.3972026Z --- FAIL: TestMigSearchIndex_basic (184.07s)
```

- 2025-06-06 PASS 12 minutes
- 2025-06-07 PASS 12 minutes
- 2025-06-08 PASS 12 minutes
- 2025-06-09 PASS 12 minutes
- 2025-06-10 PASS 28 minutes
- 2025-06-11
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-06-12 PASS 12 minutes
- 2025-06-13 PASS 10 minutes
- 2025-06-14 PASS 10 minutes
- 2025-06-15 PASS 12 minutes
- 2025-06-16 PASS 12 minutes
- 2025-06-17 PASS 12 minutes
- 2025-06-18 PASS 10 minutes
- 2025-06-19 PASS 34 minutes
- 2025-06-20 PASS 10 minutes
- 2025-06-21 PASS 10 minutes
- 2025-06-22 PASS 12 minutes
- 2025-06-23 PASS 9 minutes
- 2025-06-24 PASS 12 minutes
- 2025-06-25 PASS 10 minutes
- 2025-06-26 PASS 10 minutes
- 2025-06-27 PASS 11 minutes
- 2025-06-28 PASS 9 minutes
- 2025-06-29 PASS 11 minutes
- 2025-06-30 PASS 10 minutes
- 2025-07-01
  - PASS 12 minutes
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 13 minutes
- 2025-07-02 PASS 13 minutes
- 2025-07-03 PASS 12 minutes
- 2025-07-04 PASS 11 minutes
- 2025-07-05 PASS 9 minutes
- 2025-07-06 PASS 12 minutes
- 2025-07-07 PASS 10 minutes
- 2025-07-08 PASS 10 minutes
- 2025-07-09 PASS 10 minutes
- 2025-07-10 PASS 11 minutes