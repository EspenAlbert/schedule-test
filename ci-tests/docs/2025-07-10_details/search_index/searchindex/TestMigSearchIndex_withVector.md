# search_index/searchindex/TestMigSearchIndex_withVector Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029430000) |  | qa |  | 0.00s
[2025-06-05 00:31](#error-2025-06-05t0031440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b8161ca93c1f051c65/clusters/test-acc-tf-c-8606051943153127071 | dev | flaky_500 | 180.09s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 9 seconds
- 2025-04-13 PASS 10 seconds
- 2025-04-14 PASS 11 seconds
- 2025-04-15 PASS 10 seconds
- 2025-04-16
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-04-17 PASS 11 seconds
- 2025-04-18 PASS 10 seconds
- 2025-04-19 PASS 10 seconds
- 2025-04-20 PASS 10 seconds
- 2025-04-21 PASS 10 seconds
- 2025-04-22 PASS 10 seconds
- 2025-04-23 PASS 10 seconds
- 2025-04-24 PASS 10 seconds
- 2025-04-25 PASS 10 seconds
- 2025-04-26 PASS 12 seconds
- 2025-04-27 PASS 11 seconds
- 2025-04-28 PASS 12 seconds
- 2025-04-29 PASS 11 seconds
- 2025-04-30
  - PASS 11 seconds
  - PASS 12 seconds
- 2025-05-01
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 15 seconds
- 2025-05-02 PASS 9 seconds
- 2025-05-03 PASS 12 seconds
- 2025-05-04 PASS 10 seconds
- 2025-05-05 PASS 10 seconds
- 2025-05-06 PASS 12 seconds
- 2025-05-07 PASS 10 seconds
- 2025-05-08 PASS 10 seconds
- 2025-05-09 PASS 11 seconds
- 2025-05-10 PASS 10 seconds
- 2025-05-11

### Error 2025-05-11T00:29:43+00:00
```
2025-05-11T00:29:43.0390453Z === RUN   TestMigSearchIndex_withVector
2025-05-11T00:29:43.0391068Z     resource_search_index_migration_test.go:15: Creating execution project: test-acc-tf-p-4182267597889561263
2025-05-11T00:29:43.0472328Z     resource_search_index_migration_test.go:15: 
2025-05-11T00:29:43.0474356Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:43.0476222Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:43.0477936Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:102
2025-05-11T00:29:43.0479890Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:242
2025-05-11T00:29:43.0482300Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:15
2025-05-11T00:29:43.0483112Z         	Error:      	Received unexpected error:
2025-05-11T00:29:43.0483976Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.0484501Z         	Test:       	TestMigSearchIndex_withVector
2025-05-11T00:29:43.0485501Z         	Messages:   	Project creation failed: test-acc-tf-p-4182267597889561263, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.0486156Z --- FAIL: TestMigSearchIndex_withVector (0.01s)
```

- 2025-05-12 PASS 10 seconds
- 2025-05-13
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-05-14 PASS 10 seconds
- 2025-05-15 PASS 10 seconds
- 2025-05-16 PASS 9 seconds
- 2025-05-17 PASS 10 seconds
- 2025-05-18 PASS 11 seconds
- 2025-05-19 PASS 9 seconds
- 2025-05-20 PASS 11 seconds
- 2025-05-21 PASS 10 seconds
- 2025-05-22 PASS 10 seconds
- 2025-05-23 PASS 10 seconds
- 2025-05-24 PASS 11 seconds
- 2025-05-25 PASS 9 seconds
- 2025-05-26 PASS 13 seconds
- 2025-05-27 PASS 10 seconds
- 2025-05-28
  - PASS 9 seconds
  - PASS 10 seconds
- 2025-05-29 PASS 10 seconds
- 2025-05-30 PASS 10 seconds
- 2025-05-31 PASS 10 seconds
- 2025-06-01
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-06-02
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 15 seconds
- 2025-06-03 PASS 9 seconds
- 2025-06-04 PASS 11 seconds
- 2025-06-05

### Error 2025-06-05T00:31:44+00:00
```
2025-06-05T00:31:44.3972635Z === RUN   TestMigSearchIndex_withVector
2025-06-05T00:31:44.3973797Z     resource_search_index_migration_test.go:15: Creating execution cluster: test-acc-tf-c-8606051943153127071
2025-06-05T00:31:45.0119373Z 2025/06/05 00:31:45 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T00:34:45.2786439Z     resource_search_index_migration_test.go:15: 
2025-06-05T00:34:45.2788241Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T00:34:45.2790441Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T00:34:45.2793013Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:242
2025-06-05T00:34:45.2795641Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:15
2025-06-05T00:34:45.2796664Z         	Error:      	Received unexpected error:
2025-06-05T00:34:45.2799045Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b8161ca93c1f051c65/clusters/test-acc-tf-c-8606051943153127071 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:34:45.2800257Z         	Test:       	TestMigSearchIndex_withVector
2025-06-05T00:34:45.2802350Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8606051943153127071, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b8161ca93c1f051c65/clusters/test-acc-tf-c-8606051943153127071 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:34:45.2803713Z --- FAIL: TestMigSearchIndex_withVector (180.88s)
```

- 2025-06-06 PASS 11 seconds
- 2025-06-07 PASS 11 seconds
- 2025-06-08 PASS 9 seconds
- 2025-06-09 PASS 11 seconds
- 2025-06-10 PASS 10 seconds
- 2025-06-11
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-06-12 PASS 10 seconds
- 2025-06-13 PASS 9 seconds
- 2025-06-14 PASS 10 seconds
- 2025-06-15 PASS 9 seconds
- 2025-06-16 PASS 9 seconds
- 2025-06-17 PASS 9 seconds
- 2025-06-18 PASS 10 seconds
- 2025-06-19 PASS 9 seconds
- 2025-06-20 PASS 10 seconds
- 2025-06-21 PASS 10 seconds
- 2025-06-22 PASS 10 seconds
- 2025-06-23 PASS 10 seconds
- 2025-06-24 PASS 10 seconds
- 2025-06-25 PASS 10 seconds
- 2025-06-26 PASS 10 seconds
- 2025-06-27 PASS 12 seconds
- 2025-06-28 PASS 10 seconds
- 2025-06-29 PASS 9 seconds
- 2025-06-30 PASS 10 seconds
- 2025-07-01
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 12 seconds
  - PASS 12 seconds
  - PASS 10 seconds
- 2025-07-02 PASS 10 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 11 seconds
- 2025-07-05 PASS 10 seconds
- 2025-07-06 PASS 12 seconds
- 2025-07-07 PASS 10 seconds
- 2025-07-08 PASS 10 seconds
- 2025-07-09 PASS 9 seconds
- 2025-07-10 PASS 11 seconds