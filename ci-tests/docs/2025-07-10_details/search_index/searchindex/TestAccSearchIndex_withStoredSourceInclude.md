# search_index/searchindex/TestAccSearchIndex_withStoredSourceInclude Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029430000) |  | qa |  | 0.00s
[2025-06-05 01:04](#error-2025-06-05t0104530000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b8161ca93c1f051c65/clusters/test-acc-tf-c-7286750526505011699 | dev | flaky_500 | 180.09s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 6 seconds
- 2025-04-13 PASS 6 seconds
- 2025-04-14 PASS 6 seconds
- 2025-04-15 PASS 4 seconds
- 2025-04-16
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-04-17 PASS 5 seconds
- 2025-04-18 PASS 6 seconds
- 2025-04-19 PASS 5 seconds
- 2025-04-20 PASS 6 seconds
- 2025-04-21 PASS 5 seconds
- 2025-04-22 PASS 4 seconds
- 2025-04-23 PASS 7 seconds
- 2025-04-24 PASS 7 seconds
- 2025-04-25 PASS 7 seconds
- 2025-04-26 PASS 6 seconds
- 2025-04-27 PASS 5 seconds
- 2025-04-28 PASS 7 seconds
- 2025-04-29 PASS 8 seconds
- 2025-04-30
  - PASS 8 seconds
  - PASS 6 seconds
- 2025-05-01
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-05-02 PASS 6 seconds
- 2025-05-03 PASS 6 seconds
- 2025-05-04 PASS 7 seconds
- 2025-05-05 PASS 6 seconds
- 2025-05-06 PASS 7 seconds
- 2025-05-07 PASS 7 seconds
- 2025-05-08 PASS 4 seconds
- 2025-05-09 PASS 6 seconds
- 2025-05-10 PASS 6 seconds
- 2025-05-11

### Error 2025-05-11T00:29:43+00:00
```
2025-05-11T00:29:43.1493690Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2025-05-11T00:29:43.1494277Z     resource_search_index_test.go:182: Creating execution project: test-acc-tf-p-3526340515267179793
2025-05-11T00:29:43.1584814Z     resource_search_index_test.go:182: 
2025-05-11T00:29:43.1587176Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:43.1590808Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:43.1593493Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:102
2025-05-11T00:29:43.1596073Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:200
2025-05-11T00:29:43.1598725Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:182
2025-05-11T00:29:43.1599779Z         	Error:      	Received unexpected error:
2025-05-11T00:29:43.1600919Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.1601649Z         	Test:       	TestAccSearchIndex_withStoredSourceInclude
2025-05-11T00:29:43.1602936Z         	Messages:   	Project creation failed: test-acc-tf-p-3526340515267179793, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.1603655Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (0.01s)
```

- 2025-05-12 PASS 5 seconds
- 2025-05-13
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-05-14 PASS 6 seconds
- 2025-05-15 PASS 6 seconds
- 2025-05-16 PASS 7 seconds
- 2025-05-17 PASS 5 seconds
- 2025-05-18 PASS 6 seconds
- 2025-05-19 PASS 6 seconds
- 2025-05-20 PASS 6 seconds
- 2025-05-21 PASS 7 seconds
- 2025-05-22 PASS 6 seconds
- 2025-05-23 PASS 5 seconds
- 2025-05-24 PASS 7 seconds
- 2025-05-25 PASS 7 seconds
- 2025-05-26 PASS 7 seconds
- 2025-05-27 PASS 6 seconds
- 2025-05-28
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-05-29 PASS 6 seconds
- 2025-05-30 PASS 7 seconds
- 2025-05-31 PASS 5 seconds
- 2025-06-01
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-06-02
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-06-03 PASS 6 seconds
- 2025-06-04 PASS 8 seconds
- 2025-06-05

### Error 2025-06-05T01:04:53+00:00
```
2025-06-05T01:04:53.3237989Z === RUN   TestAccSearchIndex_withStoredSourceInclude
2025-06-05T01:04:53.3238619Z     resource_search_index_test.go:182: Creating execution cluster: test-acc-tf-c-7286750526505011699
2025-06-05T01:04:53.9608776Z 2025/06/05 01:04:53 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T01:07:54.1931674Z     resource_search_index_test.go:182: 
2025-06-05T01:07:54.1933435Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T01:07:54.1936309Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T01:07:54.1939153Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:200
2025-06-05T01:07:54.1941855Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:182
2025-06-05T01:07:54.1942868Z         	Error:      	Received unexpected error:
2025-06-05T01:07:54.1945940Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b8161ca93c1f051c65/clusters/test-acc-tf-c-7286750526505011699 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T01:07:54.1947528Z         	Test:       	TestAccSearchIndex_withStoredSourceInclude
2025-06-05T01:07:54.1951905Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7286750526505011699, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b8161ca93c1f051c65/clusters/test-acc-tf-c-7286750526505011699 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T01:07:54.1953431Z --- FAIL: TestAccSearchIndex_withStoredSourceInclude (180.87s)
```

- 2025-06-06 PASS 8 seconds
- 2025-06-07 PASS 6 seconds
- 2025-06-08 PASS 6 seconds
- 2025-06-09 PASS 7 seconds
- 2025-06-10 PASS 6 seconds
- 2025-06-11
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-06-12 PASS 6 seconds
- 2025-06-13 PASS 7 seconds
- 2025-06-14 PASS 6 seconds
- 2025-06-15 PASS 4 seconds
- 2025-06-16 PASS 7 seconds
- 2025-06-17 PASS 4 seconds
- 2025-06-18 PASS 6 seconds
- 2025-06-19 PASS 6 seconds
- 2025-06-20 PASS 6 seconds
- 2025-06-21 PASS 6 seconds
- 2025-06-22 PASS 7 seconds
- 2025-06-23 PASS 5 seconds
- 2025-06-24 PASS 6 seconds
- 2025-06-25 PASS 6 seconds
- 2025-06-26 PASS 6 seconds
- 2025-06-27 PASS 6 seconds
- 2025-06-28 PASS 7 seconds
- 2025-06-29 PASS 6 seconds
- 2025-06-30 PASS 6 seconds
- 2025-07-01
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 6 seconds
- 2025-07-03 PASS 7 seconds
- 2025-07-04 PASS 6 seconds
- 2025-07-05 PASS 7 seconds
- 2025-07-06 PASS 7 seconds
- 2025-07-07 PASS 5 seconds
- 2025-07-08 PASS 6 seconds
- 2025-07-09 PASS 7 seconds
- 2025-07-10 PASS 6 seconds