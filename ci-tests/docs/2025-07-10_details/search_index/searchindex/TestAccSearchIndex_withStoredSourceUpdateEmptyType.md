# search_index/searchindex/TestAccSearchIndex_withStoredSourceUpdateEmptyType Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029430000) |  | qa |  | 0.00s
[2025-06-05 01:10](#error-2025-06-05t0110550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b8161ca93c1f051c65/clusters/test-acc-tf-c-1736604726010365410 | dev | flaky_500 | 180.08s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 6 seconds
- 2025-04-13 PASS 7 seconds
- 2025-04-14 PASS 9 seconds
- 2025-04-15 PASS 8 seconds
- 2025-04-16
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-04-17 PASS 8 seconds
- 2025-04-18 PASS 9 seconds
- 2025-04-19 PASS 8 seconds
- 2025-04-20 PASS 8 seconds
- 2025-04-21 PASS 8 seconds
- 2025-04-22 PASS 7 seconds
- 2025-04-23 PASS 9 seconds
- 2025-04-24 PASS 9 seconds
- 2025-04-25 PASS 8 seconds
- 2025-04-26 PASS 8 seconds
- 2025-04-27 PASS 9 seconds
- 2025-04-28 PASS 9 seconds
- 2025-04-29 PASS 9 seconds
- 2025-04-30
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-05-01
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-05-02 PASS 8 seconds
- 2025-05-03 PASS 10 seconds
- 2025-05-04 PASS 9 seconds
- 2025-05-05 PASS 9 seconds
- 2025-05-06 PASS 11 seconds
- 2025-05-07 PASS 8 seconds
- 2025-05-08 PASS 10 seconds
- 2025-05-09 PASS 9 seconds
- 2025-05-10 PASS 9 seconds
- 2025-05-11

### Error 2025-05-11T00:29:43+00:00
```
2025-05-11T00:29:43.1702119Z === RUN   TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-05-11T00:29:43.1702747Z     resource_search_index_test.go:190: Creating execution project: test-acc-tf-p-6395366554193236270
2025-05-11T00:29:43.1785951Z     resource_search_index_test.go:190: 
2025-05-11T00:29:43.1787879Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:43.1790596Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:43.1793470Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:102
2025-05-11T00:29:43.1796398Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:219
2025-05-11T00:29:43.1799075Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:190
2025-05-11T00:29:43.1800046Z         	Error:      	Received unexpected error:
2025-05-11T00:29:43.1801092Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.1801839Z         	Test:       	TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-05-11T00:29:43.1803206Z         	Messages:   	Project creation failed: test-acc-tf-p-6395366554193236270, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.1803966Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateEmptyType (0.01s)
```

- 2025-05-12 PASS 9 seconds
- 2025-05-13
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-05-14 PASS 8 seconds
- 2025-05-15 PASS 9 seconds
- 2025-05-16 PASS 8 seconds
- 2025-05-17 PASS 9 seconds
- 2025-05-18 PASS 9 seconds
- 2025-05-19 PASS 8 seconds
- 2025-05-20 PASS 9 seconds
- 2025-05-21 PASS 9 seconds
- 2025-05-22 PASS 8 seconds
- 2025-05-23 PASS 9 seconds
- 2025-05-24 PASS 9 seconds
- 2025-05-25 PASS 9 seconds
- 2025-05-26 PASS 10 seconds
- 2025-05-27 PASS 8 seconds
- 2025-05-28
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-05-29 PASS 8 seconds
- 2025-05-30 PASS 8 seconds
- 2025-05-31 PASS 9 seconds
- 2025-06-01
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-06-02
  - PASS 8 seconds
  - PASS 11 seconds
  - PASS 10 seconds
- 2025-06-03 PASS 8 seconds
- 2025-06-04 PASS 10 seconds
- 2025-06-05

### Error 2025-06-05T01:10:55+00:00
```
2025-06-05T01:10:55.0775931Z === RUN   TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-06-05T01:10:55.0776564Z     resource_search_index_test.go:190: Creating execution cluster: test-acc-tf-c-1736604726010365410
2025-06-05T01:10:55.6863288Z 2025/06/05 01:10:55 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T01:13:55.9119351Z     resource_search_index_test.go:190: 
2025-06-05T01:13:55.9121598Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T01:13:55.9124301Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T01:13:55.9126985Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:219
2025-06-05T01:13:55.9129764Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:190
2025-06-05T01:13:55.9130861Z         	Error:      	Received unexpected error:
2025-06-05T01:13:55.9134108Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b8161ca93c1f051c65/clusters/test-acc-tf-c-1736604726010365410 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T01:13:55.9135466Z         	Test:       	TestAccSearchIndex_withStoredSourceUpdateEmptyType
2025-06-05T01:13:55.9137954Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1736604726010365410, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b8161ca93c1f051c65/clusters/test-acc-tf-c-1736604726010365410 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T01:13:55.9139427Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateEmptyType (180.84s)
```

- 2025-06-06 PASS 10 seconds
- 2025-06-07 PASS 10 seconds
- 2025-06-08 PASS 8 seconds
- 2025-06-09 PASS 9 seconds
- 2025-06-10 PASS 7 seconds
- 2025-06-11
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-06-12 PASS 8 seconds
- 2025-06-13 PASS 8 seconds
- 2025-06-14 PASS 9 seconds
- 2025-06-15 PASS 7 seconds
- 2025-06-16 PASS 8 seconds
- 2025-06-17 PASS 9 seconds
- 2025-06-18 PASS 9 seconds
- 2025-06-19 PASS 9 seconds
- 2025-06-20 PASS 9 seconds
- 2025-06-21 PASS 9 seconds
- 2025-06-22 PASS 9 seconds
- 2025-06-23 PASS 8 seconds
- 2025-06-24 PASS 9 seconds
- 2025-06-25 PASS 8 seconds
- 2025-06-26 PASS 9 seconds
- 2025-06-27 PASS 11 seconds
- 2025-06-28 PASS 8 seconds
- 2025-06-29 PASS 8 seconds
- 2025-06-30 PASS 8 seconds
- 2025-07-01
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-07-02 PASS 8 seconds
- 2025-07-03 PASS 8 seconds
- 2025-07-04 PASS 10 seconds
- 2025-07-05 PASS 8 seconds
- 2025-07-06 PASS 10 seconds
- 2025-07-07 PASS 7 seconds
- 2025-07-08 PASS 9 seconds
- 2025-07-09 PASS 9 seconds
- 2025-07-10 PASS 10 seconds