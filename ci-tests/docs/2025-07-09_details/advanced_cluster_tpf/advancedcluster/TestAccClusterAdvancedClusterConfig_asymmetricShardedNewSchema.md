# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 115) FAIL(x 2)
Success rate: 98.29%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 2.00s
2025-06-05 00:35 | dev | 7.04s

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
#### PASS 11 minutes
### 2025-04-11
#### PASS 15 minutes
### 2025-04-12
#### PASS 12 minutes
### 2025-04-13
#### PASS 12 minutes
### 2025-04-14
#### PASS 11 minutes
### 2025-04-15
#### PASS 13 minutes
### 2025-04-16
#### PASS 11 minutes
#### PASS 16 minutes
### 2025-04-17
#### PASS 13 minutes
### 2025-04-18
#### PASS 12 minutes
### 2025-04-19
#### PASS 13 minutes
### 2025-04-20
#### PASS 14 minutes
### 2025-04-21
#### PASS 19 minutes
### 2025-04-22
#### PASS 12 minutes
### 2025-04-23
#### PASS 13 minutes
### 2025-04-24
#### PASS 12 minutes
### 2025-04-25
#### PASS 12 minutes
### 2025-04-26
#### PASS 12 minutes
### 2025-04-27
#### PASS 13 minutes
### 2025-04-28
#### PASS 12 minutes
### 2025-04-29
#### PASS 12 minutes
### 2025-04-30
#### PASS 13 minutes
### 2025-05-01
#### PASS 12 minutes
#### PASS 13 minutes
#### PASS 13 minutes
#### PASS 13 minutes
#### PASS 11 minutes
#### PASS 14 minutes
#### PASS 12 minutes
### 2025-05-02
#### PASS 17 minutes
### 2025-05-03
#### PASS 16 minutes
### 2025-05-04
#### PASS 13 minutes
### 2025-05-05
#### PASS 12 minutes
### 2025-05-06
#### PASS 16 minutes
### 2025-05-07
#### PASS 12 minutes
### 2025-05-08
#### PASS 15 minutes
### 2025-05-09
#### PASS 13 minutes
### 2025-05-10
#### PASS 12 minutes
### 2025-05-11
#### FAIL 2 seconds
```
2025-05-11T00:30:01.8005749Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-05-11T00:30:01.8185140Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-05-11T00:30:01.8255686Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-05-11T00:30:01.8256317Z     resource_advanced_cluster_test.go:882: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:01.8256718Z         
2025-05-11T00:30:01.8257110Z         Error: error creating project: test-acc-tf-p-7712999982356517388
2025-05-11T00:30:01.8257441Z         
2025-05-11T00:30:01.8257782Z           with mongodbatlas_project.cluster_project,
2025-05-11T00:30:01.8258441Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-05-11T00:30:01.8259036Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-05-11T00:30:01.8259336Z         
2025-05-11T00:30:01.8259781Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:01.8260159Z         type
2025-05-11T00:30:01.8266363Z    test_name=TestAccClusterAdvancedCluster_withLabelIgnored
2025-05-11T00:30:01.8339484Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (2.03s)
```
### 2025-05-12
#### PASS 13 minutes
### 2025-05-13
#### PASS 13 minutes
#### PASS 12 minutes
### 2025-05-14
#### PASS 21 minutes
### 2025-05-15
#### PASS 16 minutes
### 2025-05-16
#### PASS 17 minutes
### 2025-05-17
#### PASS 15 minutes
### 2025-05-18
#### PASS 12 minutes
### 2025-05-19
#### PASS 14 minutes
### 2025-05-20
#### PASS 14 minutes
### 2025-05-21
#### PASS 14 minutes
#### PASS 11 minutes
### 2025-05-22
#### PASS 13 minutes
### 2025-05-23
#### PASS 14 minutes
### 2025-05-24
#### PASS 15 minutes
### 2025-05-25
#### PASS 12 minutes
### 2025-05-26
#### PASS 14 minutes
### 2025-05-27
#### PASS 15 minutes
### 2025-05-28
#### PASS 14 minutes
#### PASS 11 minutes
#### PASS 11 minutes
### 2025-05-29
#### PASS 33 minutes
### 2025-05-30
#### PASS 21 minutes
#### PASS 22 minutes
### 2025-05-31
#### PASS 15 minutes
### 2025-06-01
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 14 minutes
#### PASS 12 minutes
#### PASS 14 minutes
### 2025-06-02
#### PASS 13 minutes
#### PASS 15 minutes
#### PASS 14 minutes
#### PASS 13 minutes
### 2025-06-03
#### PASS 15 minutes
### 2025-06-04
#### PASS 15 minutes
### 2025-06-05
#### FAIL 7 seconds
```
2025-06-05T00:35:38.5895718Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-06-05T00:35:38.5958903Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-06-05T00:35:38.6629372Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2025-06-05T00:35:38.6629721Z     resource_advanced_cluster_test.go:885: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:35:38.6629914Z         
2025-06-05T00:35:38.6630213Z         Error: error creating project: test-acc-tf-p-9158122576812302158
2025-06-05T00:35:38.6630304Z         
2025-06-05T00:35:38.6630538Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:35:38.6630995Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:35:38.6631283Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:35:38.6631374Z         
2025-06-05T00:35:38.6631731Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:38.6632061Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:38.6632346Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:38.6632601Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (7.43s)
```
### 2025-06-06
#### PASS 14 minutes
### 2025-06-07
#### PASS 16 minutes
### 2025-06-08
#### PASS 12 minutes
### 2025-06-09
#### PASS 16 minutes
### 2025-06-10
#### PASS 32 minutes
### 2025-06-11
#### PASS 14 minutes
#### PASS 11 minutes
### 2025-06-12
#### PASS 15 minutes
### 2025-06-13
#### PASS 14 minutes
### 2025-06-14
#### PASS 15 minutes
### 2025-06-15
#### PASS 12 minutes
### 2025-06-16
#### PASS 19 minutes
### 2025-06-17
#### PASS 14 minutes
### 2025-06-18
#### PASS 19 minutes
#### PASS 14 minutes
### 2025-06-19
#### PASS 56 minutes
### 2025-06-20
#### PASS 14 minutes
### 2025-06-21
#### PASS 14 minutes
### 2025-06-22
#### PASS 14 minutes
### 2025-06-23
#### PASS 14 minutes
### 2025-06-24
#### PASS 14 minutes
### 2025-06-25
#### PASS 13 minutes
### 2025-06-26
#### PASS 19 minutes
#### PASS 13 minutes
### 2025-06-27
#### PASS 13 minutes
### 2025-06-28
#### PASS 15 minutes
### 2025-06-29
#### PASS 16 minutes
### 2025-06-30
#### PASS 16 minutes
### 2025-07-01
#### PASS 16 minutes
#### PASS 13 minutes
#### PASS 14 minutes
#### PASS 14 minutes
#### PASS 14 minutes
### 2025-07-02
#### PASS 13 minutes
### 2025-07-03
#### PASS 13 minutes
### 2025-07-04
#### PASS 19 minutes
### 2025-07-05
#### PASS 15 minutes
### 2025-07-06
#### PASS 12 minutes
### 2025-07-07
#### PASS 15 minutes
### 2025-07-08
#### PASS 16 minutes
### 2025-07-09
#### PASS 12 minutes