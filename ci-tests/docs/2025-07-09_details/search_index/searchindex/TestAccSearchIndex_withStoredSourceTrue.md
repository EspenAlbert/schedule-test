# search_index/searchindex/TestAccSearchIndex_withStoredSourceTrue Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-06-05 01:01 | dev | 180.08s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 6 seconds
### 2025-04-12
#### PASS 7 seconds
### 2025-04-13
#### PASS 6 seconds
### 2025-04-14
#### PASS 7 seconds
### 2025-04-15
#### PASS 7 seconds
### 2025-04-16
#### PASS 7 seconds
#### PASS 6 seconds
### 2025-04-17
#### PASS 6 seconds
### 2025-04-18
#### PASS 7 seconds
### 2025-04-19
#### PASS 5 seconds
### 2025-04-20
#### PASS 7 seconds
### 2025-04-21
#### PASS 7 seconds
### 2025-04-22
#### PASS 5 seconds
### 2025-04-23
#### PASS 7 seconds
### 2025-04-24
#### PASS 7 seconds
### 2025-04-25
#### PASS 6 seconds
### 2025-04-26
#### PASS 6 seconds
### 2025-04-27
#### PASS 6 seconds
### 2025-04-28
#### PASS 7 seconds
### 2025-04-29
#### PASS 6 seconds
### 2025-04-30
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-05-01
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 5 seconds
#### PASS 6 seconds
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 7 seconds
### 2025-05-02
#### PASS 5 seconds
### 2025-05-03
#### PASS 7 seconds
### 2025-05-04
#### PASS 7 seconds
### 2025-05-05
#### PASS 7 seconds
### 2025-05-06
#### PASS 7 seconds
### 2025-05-07
#### PASS 4 seconds
### 2025-05-08
#### PASS 6 seconds
### 2025-05-09
#### PASS 8 seconds
### 2025-05-10
#### PASS 5 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:43.1396900Z === RUN   TestAccSearchIndex_withStoredSourceTrue
2025-05-11T00:29:43.1397517Z     resource_search_index_test.go:178: Creating execution project: test-acc-tf-p-2846565854803544798
2025-05-11T00:29:43.1478820Z     resource_search_index_test.go:178: 
2025-05-11T00:29:43.1481095Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:43.1483534Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:43.1485282Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:102
2025-05-11T00:29:43.1487351Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:200
2025-05-11T00:29:43.1489307Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:178
2025-05-11T00:29:43.1490076Z         	Error:      	Received unexpected error:
2025-05-11T00:29:43.1490943Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.1491506Z         	Test:       	TestAccSearchIndex_withStoredSourceTrue
2025-05-11T00:29:43.1492621Z         	Messages:   	Project creation failed: test-acc-tf-p-2846565854803544798, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.1493308Z --- FAIL: TestAccSearchIndex_withStoredSourceTrue (0.01s)
```
### 2025-05-12
#### PASS 7 seconds
### 2025-05-13
#### PASS 7 seconds
#### PASS 5 seconds
### 2025-05-14
#### PASS 7 seconds
### 2025-05-15
#### PASS 7 seconds
### 2025-05-16
#### PASS 6 seconds
### 2025-05-17
#### PASS 6 seconds
### 2025-05-18
#### PASS 8 seconds
### 2025-05-19
#### PASS 7 seconds
### 2025-05-20
#### PASS 7 seconds
### 2025-05-21
#### PASS 7 seconds
### 2025-05-22
#### PASS 7 seconds
### 2025-05-23
#### PASS 7 seconds
### 2025-05-24
#### PASS 7 seconds
### 2025-05-25
#### PASS 5 seconds
### 2025-05-26
#### PASS 7 seconds
### 2025-05-27
#### PASS 7 seconds
### 2025-05-28
#### PASS 5 seconds
#### PASS 6 seconds
### 2025-05-29
#### PASS 5 seconds
### 2025-05-30
#### PASS 7 seconds
### 2025-05-31
#### PASS 6 seconds
### 2025-06-01
#### PASS 5 seconds
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 7 seconds
#### PASS 5 seconds
#### PASS 7 seconds
### 2025-06-02
#### PASS 7 seconds
#### PASS 7 seconds
#### PASS 6 seconds
### 2025-06-03
#### PASS 4 seconds
### 2025-06-04
#### PASS 6 seconds
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T01:01:52.5275243Z === RUN   TestAccSearchIndex_withStoredSourceTrue
2025-06-05T01:01:52.5275844Z     resource_search_index_test.go:178: Creating execution cluster: test-acc-tf-c-1015705549572868670
2025-06-05T01:01:53.1446852Z 2025/06/05 01:01:53 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T01:04:53.3215802Z     resource_search_index_test.go:178: 
2025-06-05T01:04:53.3218146Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T01:04:53.3221242Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T01:04:53.3226265Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:200
2025-06-05T01:04:53.3229095Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:178
2025-06-05T01:04:53.3230053Z         	Error:      	Received unexpected error:
2025-06-05T01:04:53.3232730Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b8161ca93c1f051c65/clusters/test-acc-tf-c-1015705549572868670 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T01:04:53.3234035Z         	Test:       	TestAccSearchIndex_withStoredSourceTrue
2025-06-05T01:04:53.3236132Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1015705549572868670, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b8161ca93c1f051c65/clusters/test-acc-tf-c-1015705549572868670 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T01:04:53.3237565Z --- FAIL: TestAccSearchIndex_withStoredSourceTrue (180.80s)
```
### 2025-06-06
#### PASS 8 seconds
### 2025-06-07
#### PASS 6 seconds
### 2025-06-08
#### PASS 5 seconds
### 2025-06-09
#### PASS 7 seconds
### 2025-06-10
#### PASS 8 seconds
### 2025-06-11
#### PASS 7 seconds
#### PASS 5 seconds
### 2025-06-12
#### PASS 6 seconds
### 2025-06-13
#### PASS 6 seconds
### 2025-06-14
#### PASS 7 seconds
### 2025-06-15
#### PASS 5 seconds
### 2025-06-16
#### PASS 7 seconds
### 2025-06-17
#### PASS 7 seconds
### 2025-06-18
#### PASS 4 seconds
### 2025-06-19
#### PASS 6 seconds
### 2025-06-20
#### PASS 4 seconds
### 2025-06-21
#### PASS 5 seconds
### 2025-06-22
#### PASS 6 seconds
### 2025-06-23
#### PASS 7 seconds
### 2025-06-24
#### PASS 6 seconds
### 2025-06-25
#### PASS 6 seconds
### 2025-06-26
#### PASS 5 seconds
### 2025-06-27
#### PASS 7 seconds
### 2025-06-28
#### PASS 7 seconds
### 2025-06-29
#### PASS 6 seconds
### 2025-06-30
#### PASS 6 seconds
### 2025-07-01
#### PASS 8 seconds
#### PASS 6 seconds
#### PASS 6 seconds
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 6 seconds
### 2025-07-02
#### PASS 7 seconds
### 2025-07-03
#### PASS 6 seconds
### 2025-07-04
#### PASS 7 seconds
### 2025-07-05
#### PASS 8 seconds
### 2025-07-06
#### PASS 6 seconds
### 2025-07-07
#### PASS 7 seconds
### 2025-07-08
#### PASS 7 seconds
### 2025-07-09
#### PASS 7 seconds