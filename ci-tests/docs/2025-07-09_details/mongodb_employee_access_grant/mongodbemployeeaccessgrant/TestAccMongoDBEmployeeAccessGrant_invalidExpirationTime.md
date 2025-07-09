# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.01s
2025-06-05 00:34 | dev | 180.07s

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
#### PASS a moment
### 2025-04-12
#### PASS a moment
### 2025-04-13
#### PASS a moment
### 2025-04-14
#### PASS a moment
### 2025-04-15
#### PASS a moment
### 2025-04-16
#### PASS a moment
#### PASS a moment
### 2025-04-17
#### PASS a moment
### 2025-04-18
#### PASS a moment
### 2025-04-19
#### PASS a moment
### 2025-04-20
#### PASS a moment
### 2025-04-21
#### PASS a moment
### 2025-04-22
#### PASS a moment
### 2025-04-23
#### PASS a moment
### 2025-04-24
#### PASS a moment
### 2025-04-25
#### PASS a moment
### 2025-04-26
#### PASS a moment
### 2025-04-27
#### PASS a moment
### 2025-04-28
#### PASS a moment
### 2025-04-29
#### PASS a moment
### 2025-04-30
#### PASS a moment
#### PASS a moment
### 2025-05-01
#### PASS a moment
#### PASS a moment
#### PASS a moment
#### PASS a moment
#### PASS a moment
#### PASS a moment
#### PASS a moment
### 2025-05-02
#### PASS a moment
### 2025-05-03
#### PASS a moment
### 2025-05-04
#### PASS a moment
### 2025-05-05
#### PASS a moment
### 2025-05-06
#### PASS a moment
### 2025-05-07
#### PASS a moment
### 2025-05-08
#### PASS a moment
### 2025-05-09
#### PASS a moment
### 2025-05-10
#### PASS a moment
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:49.1021470Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2025-05-11T00:29:49.1022065Z     resource_test.go:66: Creating execution project: test-acc-tf-p-7747777698637026820
2025-05-11T00:29:49.1750148Z     resource_test.go:66: 
2025-05-11T00:29:49.1752306Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:49.1756756Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:49.1759464Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:102
2025-05-11T00:29:49.1761403Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:66
2025-05-11T00:29:49.1762183Z         	Error:      	Received unexpected error:
2025-05-11T00:29:49.1763016Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:49.1763647Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2025-05-11T00:29:49.1764681Z         	Messages:   	Project creation failed: test-acc-tf-p-7747777698637026820, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:49.1765424Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime (0.07s)
```
### 2025-05-12
#### PASS a moment
### 2025-05-13
#### PASS a moment
#### PASS a moment
### 2025-05-14
#### PASS a moment
### 2025-05-15
#### PASS a moment
### 2025-05-16
#### PASS a moment
### 2025-05-17
#### PASS a moment
### 2025-05-18
#### PASS a moment
### 2025-05-19
#### PASS a moment
### 2025-05-20
#### PASS a moment
### 2025-05-21
#### PASS a moment
### 2025-05-22
#### PASS a moment
### 2025-05-23
#### PASS a moment
### 2025-05-24
#### PASS a moment
### 2025-05-25
#### PASS a moment
### 2025-05-26
#### PASS a moment
### 2025-05-27
#### PASS a moment
### 2025-05-28
#### PASS a moment
#### PASS a moment
### 2025-05-29
#### PASS a moment
### 2025-05-30
#### PASS a moment
### 2025-05-31
#### PASS a moment
### 2025-06-01
#### PASS a moment
#### PASS a moment
#### PASS a moment
#### PASS a moment
#### PASS a moment
#### PASS a moment
### 2025-06-02
#### PASS a moment
#### PASS a moment
#### PASS a moment
### 2025-06-03
#### PASS a moment
### 2025-06-04
#### PASS a moment
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:34:43.0181860Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2025-06-05T00:34:43.0182454Z     resource_test.go:66: Creating execution cluster: test-acc-tf-c-3027582333510925965
2025-06-05T00:34:43.5320025Z 2025/06/05 00:34:43 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T00:37:43.7594224Z     resource_test.go:66: 
2025-06-05T00:37:43.7596530Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T00:37:43.7600417Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T00:37:43.7602814Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:66
2025-06-05T00:37:43.7603667Z         	Error:      	Received unexpected error:
2025-06-05T00:37:43.7606478Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b7c939f2741325036d/clusters/test-acc-tf-c-3027582333510925965 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:37:43.7607875Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2025-06-05T00:37:43.7610143Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3027582333510925965, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b7c939f2741325036d/clusters/test-acc-tf-c-3027582333510925965 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:37:43.7611629Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime (180.74s)
```
### 2025-06-06
#### PASS a moment
### 2025-06-07
#### PASS a moment
### 2025-06-08
#### PASS a moment
### 2025-06-09
#### PASS a moment
### 2025-06-10
#### PASS a moment
### 2025-06-11
#### PASS a moment
#### PASS a moment
### 2025-06-12
#### PASS a moment
### 2025-06-13
#### PASS a moment
### 2025-06-14
#### PASS a moment
### 2025-06-15
#### PASS a moment
### 2025-06-16
#### PASS a moment
### 2025-06-17
#### PASS a moment
### 2025-06-18
#### PASS a moment
### 2025-06-19
#### PASS a moment
### 2025-06-20
#### PASS a moment
### 2025-06-21
#### PASS a moment
### 2025-06-22
#### PASS a moment
### 2025-06-23
#### PASS a moment
### 2025-06-24
#### PASS a moment
### 2025-06-25
#### PASS a moment
### 2025-06-26
#### PASS a moment
### 2025-06-27
#### PASS a moment
### 2025-06-28
#### PASS a moment
### 2025-06-29
#### PASS a moment
### 2025-06-30
#### PASS a moment
### 2025-07-01
#### PASS a moment
#### PASS a moment
#### PASS a moment
#### PASS a moment
#### PASS a moment
#### PASS a moment
### 2025-07-02
#### PASS a moment
### 2025-07-03
#### PASS a moment
### 2025-07-04
#### PASS a moment
### 2025-07-05
#### PASS a moment
### 2025-07-06
#### PASS a moment
### 2025-07-07
#### PASS a moment
### 2025-07-08
#### PASS a moment
### 2025-07-09
#### PASS a moment