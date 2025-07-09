# config/databaseuser/TestAccDatabaseUser_withRoles Test Details
# Found 101 TestRuns in dev, qa from 2025-04-24 to 2025-07-09 from master branch: 1 unique tests, PASS(x 100) FAIL
Success rate: 99.01%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s

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
2025-04-11: MISSING
2025-04-12: MISSING
2025-04-13: MISSING
2025-04-14: MISSING
2025-04-15: MISSING
2025-04-16: MISSING
2025-04-17: MISSING
2025-04-18: MISSING
2025-04-19: MISSING
2025-04-20: MISSING
2025-04-21: MISSING
2025-04-22: MISSING
2025-04-23: MISSING
### 2025-04-24
#### PASS 15 seconds
### 2025-04-25
#### PASS 15 seconds
### 2025-04-26
#### PASS 15 seconds
### 2025-04-27
#### PASS 16 seconds
### 2025-04-28
#### PASS 16 seconds
### 2025-04-29
#### PASS 16 seconds
### 2025-04-30
#### PASS 16 seconds
#### PASS 17 seconds
### 2025-05-01
#### PASS 16 seconds
#### PASS 16 seconds
#### PASS 15 seconds
#### PASS 14 seconds
#### PASS 21 seconds
#### PASS 16 seconds
#### PASS 24 seconds
### 2025-05-02
#### PASS 15 seconds
### 2025-05-03
#### PASS 16 seconds
### 2025-05-04
#### PASS 16 seconds
### 2025-05-05
#### PASS 16 seconds
### 2025-05-06
#### PASS 16 seconds
### 2025-05-07
#### PASS 15 seconds
### 2025-05-08
#### PASS 16 seconds
### 2025-05-09
#### PASS 16 seconds
### 2025-05-10
#### PASS 15 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:53.0045835Z === RUN   TestAccDatabaseUser_withRoles
2025-05-11T00:29:53.0046875Z     resource_database_user_test.go:280: Creating execution project: test-acc-tf-p-3303927524285933669
2025-05-11T00:29:53.0047788Z     resource_database_user_test.go:280: 
2025-05-11T00:29:53.0049452Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:53.0053068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:53.0056597Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:280
2025-05-11T00:29:53.0058008Z         	Error:      	Received unexpected error:
2025-05-11T00:29:53.0059546Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:53.0060467Z         	Test:       	TestAccDatabaseUser_withRoles
2025-05-11T00:29:53.0062505Z         	Messages:   	Project creation failed: test-acc-tf-p-3303927524285933669, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:53.0063700Z --- FAIL: TestAccDatabaseUser_withRoles (0.01s)
```
### 2025-05-12
#### PASS 16 seconds
### 2025-05-13
#### PASS 16 seconds
#### PASS 16 seconds
### 2025-05-14
#### PASS 15 seconds
### 2025-05-15
#### PASS 16 seconds
### 2025-05-16
#### PASS 15 seconds
### 2025-05-17
#### PASS 14 seconds
### 2025-05-18
#### PASS 15 seconds
### 2025-05-19
#### PASS 15 seconds
### 2025-05-20
#### PASS 15 seconds
### 2025-05-21
#### PASS 16 seconds
### 2025-05-22
#### PASS 15 seconds
### 2025-05-23
#### PASS 15 seconds
### 2025-05-24
#### PASS 15 seconds
### 2025-05-25
#### PASS 15 seconds
### 2025-05-26
#### PASS 15 seconds
### 2025-05-27
#### PASS 16 seconds
### 2025-05-28
#### PASS 15 seconds
#### PASS 15 seconds
#### PASS 14 seconds
### 2025-05-29
#### PASS 16 seconds
### 2025-05-30
#### PASS 16 seconds
### 2025-05-31
#### PASS 15 seconds
### 2025-06-01
#### PASS 14 seconds
#### PASS 16 seconds
#### PASS 16 seconds
#### PASS 15 seconds
#### PASS 16 seconds
#### PASS 14 seconds
### 2025-06-02
#### PASS 14 seconds
#### PASS 20 seconds
#### PASS 21 seconds
### 2025-06-03
#### PASS 16 seconds
### 2025-06-04
#### PASS 14 seconds
### 2025-06-05
#### PASS 20 seconds
### 2025-06-06
#### PASS 15 seconds
### 2025-06-07
#### PASS 15 seconds
### 2025-06-08
#### PASS 14 seconds
### 2025-06-09
#### PASS 15 seconds
### 2025-06-10
#### PASS 15 seconds
### 2025-06-11
#### PASS 15 seconds
#### PASS 16 seconds
### 2025-06-12
#### PASS 15 seconds
### 2025-06-13
#### PASS 15 seconds
### 2025-06-14
#### PASS 15 seconds
### 2025-06-15
#### PASS 15 seconds
### 2025-06-16
#### PASS 15 seconds
### 2025-06-17
#### PASS 15 seconds
### 2025-06-18
#### PASS 16 seconds
#### PASS 15 seconds
### 2025-06-19
#### PASS 15 seconds
### 2025-06-20
#### PASS 16 seconds
### 2025-06-21
#### PASS 19 seconds
### 2025-06-22
#### PASS 14 seconds
### 2025-06-23
#### PASS 15 seconds
### 2025-06-24
#### PASS 14 seconds
### 2025-06-25
#### PASS 15 seconds
### 2025-06-26
#### PASS 16 seconds
### 2025-06-27
#### PASS 16 seconds
### 2025-06-28
#### PASS 14 seconds
### 2025-06-29
#### PASS 16 seconds
### 2025-06-30
#### PASS 15 seconds
### 2025-07-01
#### PASS 15 seconds
#### PASS 16 seconds
#### PASS 17 seconds
#### PASS 15 seconds
#### PASS 17 seconds
#### PASS 21 seconds
### 2025-07-02
#### PASS 16 seconds
### 2025-07-03
#### PASS 15 seconds
### 2025-07-04
#### PASS 14 seconds
### 2025-07-05
#### PASS 15 seconds
### 2025-07-06
#### PASS 12 seconds
### 2025-07-07
#### PASS 15 seconds
### 2025-07-08
#### PASS 16 seconds
### 2025-07-09
#### PASS 16 seconds