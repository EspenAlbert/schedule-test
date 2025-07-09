# search_index/searchindex/TestAccSearchIndex_withStoredSourceUpdateSearchType Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-06-05 01:13 | dev | 180.09s

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
#### PASS 9 seconds
### 2025-04-12
#### PASS 8 seconds
### 2025-04-13
#### PASS 9 seconds
### 2025-04-14
#### PASS 9 seconds
### 2025-04-15
#### PASS 8 seconds
### 2025-04-16
#### PASS 9 seconds
#### PASS 8 seconds
### 2025-04-17
#### PASS 7 seconds
### 2025-04-18
#### PASS 8 seconds
### 2025-04-19
#### PASS 8 seconds
### 2025-04-20
#### PASS 9 seconds
### 2025-04-21
#### PASS 8 seconds
### 2025-04-22
#### PASS 9 seconds
### 2025-04-23
#### PASS 8 seconds
### 2025-04-24
#### PASS 9 seconds
### 2025-04-25
#### PASS 8 seconds
### 2025-04-26
#### PASS 8 seconds
### 2025-04-27
#### PASS 11 seconds
### 2025-04-28
#### PASS 9 seconds
### 2025-04-29
#### PASS 9 seconds
### 2025-04-30
#### PASS 10 seconds
#### PASS 10 seconds
### 2025-05-01
#### PASS 9 seconds
#### PASS 11 seconds
#### PASS 7 seconds
#### PASS 9 seconds
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 11 seconds
### 2025-05-02
#### PASS 8 seconds
### 2025-05-03
#### PASS 9 seconds
### 2025-05-04
#### PASS 9 seconds
### 2025-05-05
#### PASS 8 seconds
### 2025-05-06
#### PASS 10 seconds
### 2025-05-07
#### PASS 8 seconds
### 2025-05-08
#### PASS 8 seconds
### 2025-05-09
#### PASS 9 seconds
### 2025-05-10
#### PASS 9 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:43.1804423Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-05-11T00:29:43.1805051Z     resource_search_index_test.go:194: Creating execution project: test-acc-tf-p-3640889526331325177
2025-05-11T00:29:43.1878000Z     resource_search_index_test.go:194: 
2025-05-11T00:29:43.1880687Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:43.1884895Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:43.1888510Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:102
2025-05-11T00:29:43.1892648Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:219
2025-05-11T00:29:43.1896073Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:194
2025-05-11T00:29:43.1897464Z         	Error:      	Received unexpected error:
2025-05-11T00:29:43.1898967Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.1899983Z         	Test:       	TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-05-11T00:29:43.1901769Z         	Messages:   	Project creation failed: test-acc-tf-p-3640889526331325177, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.1903392Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (0.01s)
```
### 2025-05-12
#### PASS 9 seconds
### 2025-05-13
#### PASS 9 seconds
#### PASS 8 seconds
### 2025-05-14
#### PASS 8 seconds
### 2025-05-15
#### PASS 9 seconds
### 2025-05-16
#### PASS 9 seconds
### 2025-05-17
#### PASS 8 seconds
### 2025-05-18
#### PASS 9 seconds
### 2025-05-19
#### PASS 8 seconds
### 2025-05-20
#### PASS 10 seconds
### 2025-05-21
#### PASS 9 seconds
### 2025-05-22
#### PASS 8 seconds
### 2025-05-23
#### PASS 8 seconds
### 2025-05-24
#### PASS 9 seconds
### 2025-05-25
#### PASS 7 seconds
### 2025-05-26
#### PASS 9 seconds
### 2025-05-27
#### PASS 8 seconds
### 2025-05-28
#### PASS 6 seconds
#### PASS 9 seconds
### 2025-05-29
#### PASS 9 seconds
### 2025-05-30
#### PASS 8 seconds
### 2025-05-31
#### PASS 9 seconds
### 2025-06-01
#### PASS 9 seconds
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 9 seconds
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-06-02
#### PASS 8 seconds
#### PASS 10 seconds
#### PASS 11 seconds
### 2025-06-03
#### PASS 8 seconds
### 2025-06-04
#### PASS 11 seconds
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T01:13:55.9139906Z === RUN   TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-06-05T01:13:55.9140538Z     resource_search_index_test.go:194: Creating execution cluster: test-acc-tf-c-8512162181260754944
2025-06-05T01:13:56.5014978Z 2025/06/05 01:13:56 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T01:16:56.8025169Z     resource_search_index_test.go:194: 
2025-06-05T01:16:56.8026902Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T01:16:56.8030298Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T01:16:56.8033879Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:219
2025-06-05T01:16:56.8037963Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:194
2025-06-05T01:16:56.8039294Z         	Error:      	Received unexpected error:
2025-06-05T01:16:56.8042734Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b8161ca93c1f051c65/clusters/test-acc-tf-c-8512162181260754944 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T01:16:56.8044502Z         	Test:       	TestAccSearchIndex_withStoredSourceUpdateSearchType
2025-06-05T01:16:56.8046584Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8512162181260754944, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b8161ca93c1f051c65/clusters/test-acc-tf-c-8512162181260754944 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T01:16:56.8047996Z --- FAIL: TestAccSearchIndex_withStoredSourceUpdateSearchType (180.89s)
```
### 2025-06-06
#### PASS 8 seconds
### 2025-06-07
#### PASS 10 seconds
### 2025-06-08
#### PASS 8 seconds
### 2025-06-09
#### PASS 8 seconds
### 2025-06-10
#### PASS 9 seconds
### 2025-06-11
#### PASS 9 seconds
#### PASS 7 seconds
### 2025-06-12
#### PASS 9 seconds
### 2025-06-13
#### PASS 8 seconds
### 2025-06-14
#### PASS 9 seconds
### 2025-06-15
#### PASS 8 seconds
### 2025-06-16
#### PASS 9 seconds
### 2025-06-17
#### PASS 7 seconds
### 2025-06-18
#### PASS 8 seconds
### 2025-06-19
#### PASS 7 seconds
### 2025-06-20
#### PASS 8 seconds
### 2025-06-21
#### PASS 9 seconds
### 2025-06-22
#### PASS 8 seconds
### 2025-06-23
#### PASS 8 seconds
### 2025-06-24
#### PASS 8 seconds
### 2025-06-25
#### PASS 7 seconds
### 2025-06-26
#### PASS 9 seconds
### 2025-06-27
#### PASS 10 seconds
### 2025-06-28
#### PASS 8 seconds
### 2025-06-29
#### PASS 9 seconds
### 2025-06-30
#### PASS 8 seconds
### 2025-07-01
#### PASS 10 seconds
#### PASS 8 seconds
#### PASS 11 seconds
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 10 seconds
### 2025-07-02
#### PASS 9 seconds
### 2025-07-03
#### PASS 8 seconds
### 2025-07-04
#### PASS 10 seconds
### 2025-07-05
#### PASS 8 seconds
### 2025-07-06
#### PASS 10 seconds
### 2025-07-07
#### PASS 9 seconds
### 2025-07-08
#### PASS 9 seconds
### 2025-07-09
#### PASS 8 seconds