# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 116) FAIL
Success rate: 99.15%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.00s

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
### 2025-04-10
#### PASS 10 seconds
### 2025-04-11
#### PASS a minute
### 2025-04-12
#### PASS 10 seconds
### 2025-04-13
#### PASS 15 seconds
### 2025-04-14
#### PASS 20 seconds
### 2025-04-15
#### PASS 5 seconds
### 2025-04-16
#### PASS a minute
#### PASS 5 seconds
### 2025-04-17
#### PASS 5 seconds
### 2025-04-18
#### PASS 5 seconds
### 2025-04-19
#### PASS 10 seconds
### 2025-04-20
#### PASS 25 seconds
### 2025-04-21
#### PASS 20 seconds
### 2025-04-22
#### PASS 5 seconds
### 2025-04-23
#### PASS 5 seconds
### 2025-04-24
#### PASS 5 seconds
### 2025-04-25
#### PASS 5 seconds
### 2025-04-26
#### PASS 55 seconds
### 2025-04-27
#### PASS a minute
### 2025-04-28
#### PASS a minute
### 2025-04-29
#### PASS 20 seconds
### 2025-04-30
#### PASS 40 seconds
### 2025-05-01
#### PASS 30 seconds
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 50 seconds
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 10 seconds
### 2025-05-02
#### PASS 10 seconds
### 2025-05-03
#### PASS 15 seconds
### 2025-05-04
#### PASS 55 seconds
### 2025-05-05
#### PASS a minute
### 2025-05-06
#### PASS 5 seconds
### 2025-05-07
#### PASS 55 seconds
### 2025-05-08
#### PASS 15 seconds
### 2025-05-09
#### PASS 20 seconds
### 2025-05-10
#### PASS 10 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:01.7946744Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType
2025-05-11T00:30:01.7947194Z     shared_resource.go:84: 
2025-05-11T00:30:01.7948076Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7949821Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7951902Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7953666Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7955656Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:762
2025-05-11T00:30:01.7956476Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7957339Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7958064Z         	Test:       	TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType
2025-05-11T00:30:01.7959187Z         	Messages:   	Project creation failed: test-acc-tf-p-4920014228697807911, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7960004Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType (0.02s)
```
### 2025-05-12
#### PASS 10 seconds
### 2025-05-13
#### PASS 10 seconds
#### PASS a minute
### 2025-05-14
#### PASS 10 seconds
### 2025-05-15
#### PASS 10 seconds
### 2025-05-16
#### PASS 30 seconds
### 2025-05-17
#### PASS 10 seconds
### 2025-05-18
#### PASS 10 seconds
### 2025-05-19
#### PASS a minute
### 2025-05-20
#### PASS 15 seconds
### 2025-05-21
#### PASS a minute
#### PASS 10 seconds
### 2025-05-22
#### PASS 15 seconds
### 2025-05-23
#### PASS 20 seconds
### 2025-05-24
#### PASS 10 seconds
### 2025-05-25
#### PASS 15 seconds
### 2025-05-26
#### PASS a minute
### 2025-05-27
#### PASS 55 seconds
### 2025-05-28
#### PASS a minute
#### PASS 15 seconds
#### PASS 10 seconds
### 2025-05-29
#### PASS a minute
### 2025-05-30
#### PASS a minute
#### PASS 15 seconds
### 2025-05-31
#### PASS a minute
### 2025-06-01
#### PASS 45 seconds
#### PASS 10 seconds
#### PASS 20 seconds
#### PASS 20 seconds
#### PASS 25 seconds
### 2025-06-02
#### PASS a minute
#### PASS a minute
#### PASS 35 seconds
#### PASS 30 seconds
### 2025-06-03
#### PASS 40 seconds
### 2025-06-04
#### PASS 10 seconds
### 2025-06-05
#### PASS 55 seconds
### 2025-06-06
#### PASS a minute
### 2025-06-07
#### PASS 15 seconds
### 2025-06-08
#### PASS 35 seconds
### 2025-06-09
#### PASS 10 seconds
### 2025-06-10
#### PASS 10 seconds
### 2025-06-11
#### PASS 20 seconds
#### PASS 35 seconds
### 2025-06-12
#### PASS 50 seconds
### 2025-06-13
#### PASS 45 seconds
### 2025-06-14
#### PASS 40 seconds
### 2025-06-15
#### PASS 20 seconds
### 2025-06-16
#### PASS 25 seconds
### 2025-06-17
#### PASS 15 seconds
### 2025-06-18
#### PASS 40 seconds
#### PASS 20 seconds
### 2025-06-19
#### PASS 20 seconds
### 2025-06-20
#### PASS a minute
### 2025-06-21
#### PASS 55 seconds
### 2025-06-22
#### PASS 55 seconds
### 2025-06-23
#### PASS 10 seconds
### 2025-06-24
#### PASS 25 seconds
### 2025-06-25
#### PASS 25 seconds
### 2025-06-26
#### PASS 35 seconds
#### PASS 45 seconds
### 2025-06-27
#### PASS 10 seconds
### 2025-06-28
#### PASS 10 seconds
### 2025-06-29
#### PASS 10 seconds
### 2025-06-30
#### PASS 50 seconds
### 2025-07-01
#### PASS 25 seconds
#### PASS 50 seconds
#### PASS 10 seconds
#### PASS 25 seconds
#### PASS 15 seconds
### 2025-07-02
#### PASS 20 seconds
### 2025-07-03
#### PASS 20 seconds
### 2025-07-04
#### PASS 50 seconds
### 2025-07-05
#### PASS a minute
### 2025-07-06
#### PASS 5 seconds
### 2025-07-07
#### PASS 35 seconds
### 2025-07-08
#### PASS 50 seconds
### 2025-07-09
#### PASS a minute