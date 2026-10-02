# advanced_cluster/advancedcluster/TestAccAdvancedCluster_gen1ProvisionedDiskIops Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-16 00:43](#error-2026-09-16t0043130000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6aa9e5ce013d831ec44a646d/clusters | dev | flaky_500 | 40.07s
[2026-09-17 00:43](#error-2026-09-17t0043410000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6aab3762b6db1071b94ed73a/clusters | dev | flaky_500 | 35.08s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 27 minutes
- 2026-09-03
  - PASS 17 minutes
  - PASS 16 minutes
- 2026-09-04 PASS 27 minutes
- 2026-09-05 PASS 15 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 16 minutes
- 2026-09-08 PASS 15 minutes
- 2026-09-09 PASS 16 minutes
- 2026-09-10 PASS 12 minutes
- 2026-09-11
  - PASS an hour
  - PASS 13 minutes
- 2026-09-12 PASS 15 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 16 minutes
- 2026-09-15 PASS 16 minutes
- 2026-09-16

### Error 2026-09-16T00:43:13+00:00
```
2026-09-16T00:43:13.7327229Z === RUN   TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-09-16T00:43:13.7370338Z === CONT  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-09-16T00:43:53.7346433Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-09-16T00:43:53.7347404Z     pre_check.go:46: Time before creating cluster: 2026-09-16T00:43:53.734333807Z, ProjectID: 6aa9e5ce013d831ec44a646d, Cluster name: test-acc-tf-c-1184913059660236797
2026-09-16T00:43:54.3917393Z    test_name=TestAccAdvancedCluster_gen1ProvisionedDiskIops test_terraform_path=/home/runner/work/_temp/33384e82-25e3-4653-8c34-19f41ccbd7e5/terraform test_step_number=1 test_working_directory=/tmp/plugintest4160987759
2026-09-16T00:43:54.3918080Z     resource_test.go:3355: Step 1/5 error: Error running apply: exit status 1
2026-09-16T00:43:54.3918347Z         
2026-09-16T00:43:54.3918608Z         Error: Error in create
2026-09-16T00:43:54.3918771Z         
2026-09-16T00:43:54.3918994Z           with mongodbatlas_advanced_cluster.test,
2026-09-16T00:43:54.3919654Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-16T00:43:54.3920385Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2026-09-16T00:43:54.3920694Z         
2026-09-16T00:43:54.3921103Z         cluster name: test-acc-tf-c-1184913059660236797, API error details:
2026-09-16T00:43:54.3921722Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e5ce013d831ec44a646d/clusters
2026-09-16T00:43:54.3922150Z         POST: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-16T00:43:54.3922601Z         attribute Disk IOPS. Configured IOPS of 1000 must be equal to or below the
2026-09-16T00:43:54.3923001Z         maximum of 500 for instance size M30. specified. Reason: Bad Request. Params:
2026-09-16T00:43:54.3923654Z         [Disk IOPS. Configured IOPS of 1000 must be equal to or below the maximum of
2026-09-16T00:43:54.3924035Z         500 for instance size M30.], BadRequestDetail: 
2026-09-16T00:43:54.4279979Z --- FAIL: TestAccAdvancedCluster_gen1ProvisionedDiskIops (40.70s)
```

- 2026-09-17

### Error 2026-09-17T00:43:41+00:00
```
2026-09-17T00:43:41.3512189Z === RUN   TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-09-17T00:43:41.3516197Z === CONT  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-09-17T00:44:16.3555740Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-09-17T00:44:16.3556550Z     pre_check.go:46: Time before creating cluster: 2026-09-17T00:44:16.355337165Z, ProjectID: 6aab3762b6db1071b94ed73a, Cluster name: test-acc-tf-c-6537657095174160077
2026-09-17T00:44:17.1019980Z    test_terraform_path=/home/runner/work/_temp/360b18df-6e7b-4d4c-8f57-46939a8df9c2/terraform test_working_directory=/tmp/plugintest2837974225 test_name=TestAccAdvancedCluster_gen1ProvisionedDiskIops test_step_number=1
2026-09-17T00:44:17.1020922Z     resource_test.go:3355: Step 1/5 error: Error running apply: exit status 1
2026-09-17T00:44:17.1021238Z         
2026-09-17T00:44:17.1021561Z         Error: Error in create
2026-09-17T00:44:17.1021831Z         
2026-09-17T00:44:17.1022131Z           with mongodbatlas_advanced_cluster.test,
2026-09-17T00:44:17.1022602Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-17T00:44:17.1023048Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2026-09-17T00:44:17.1023357Z         
2026-09-17T00:44:17.1023677Z         cluster name: test-acc-tf-c-6537657095174160077, API error details:
2026-09-17T00:44:17.1024230Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab3762b6db1071b94ed73a/clusters
2026-09-17T00:44:17.1024924Z         POST: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-17T00:44:17.1025447Z         attribute Disk IOPS. Configured IOPS of 1000 must be equal to or below the
2026-09-17T00:44:17.1025981Z         maximum of 500 for instance size M30. specified. Reason: Bad Request. Params:
2026-09-17T00:44:17.1026441Z         [Disk IOPS. Configured IOPS of 1000 must be equal to or below the maximum of
2026-09-17T00:44:17.1026811Z         500 for instance size M30.], BadRequestDetail: 
2026-09-17T00:44:17.1491094Z --- FAIL: TestAccAdvancedCluster_gen1ProvisionedDiskIops (35.80s)
```

- 2026-09-18 PASS 21 minutes
- 2026-09-19 PASS 16 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 15 minutes
- 2026-09-22
  - PASS 16 minutes
  - PASS 16 minutes
- 2026-09-23
  - PASS 13 minutes
  - PASS 13 minutes
- 2026-09-24 PASS 16 minutes
- 2026-09-25 PASS 17 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 15 minutes
- 2026-09-29
  - PASS 15 minutes
  - PASS 20 minutes
  - PASS 19 minutes
- 2026-09-30 PASS 14 minutes
- 2026-10-01 PASS 12 minutes
- 2026-10-02 PASS 15 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-27 00:51](#error-2026-09-27t0051170000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6ab86810f0f03c0942ef98dd/clusters | qa | flaky_500 | 25.08s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 14 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 16 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 16 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 14 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27

### Error 2026-09-27T00:51:17+00:00
```
2026-09-27T00:51:17.7408364Z === RUN   TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-09-27T00:51:18.0253809Z === CONT  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-09-27T00:51:42.5938575Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-09-27T00:51:42.5941916Z     pre_check.go:46: Time before creating cluster: 2026-09-27T00:51:42.593513404Z, ProjectID: 6ab86810f0f03c0942ef98dd, Cluster name: test-acc-tf-c-2481464109172394858
2026-09-27T00:51:43.3409967Z   
2026-09-27T00:51:43.3410375Z     resource_test.go:3355: Step 1/5 error: Error running apply: exit status 1
2026-09-27T00:51:43.3410685Z         
2026-09-27T00:51:43.3410910Z         Error: Error in create
2026-09-27T00:51:43.3411225Z         
2026-09-27T00:51:43.3411495Z           with mongodbatlas_advanced_cluster.test,
2026-09-27T00:51:43.3412051Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-27T00:51:43.3412512Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2026-09-27T00:51:43.3412853Z         
2026-09-27T00:51:43.3413193Z         cluster name: test-acc-tf-c-2481464109172394858, API error details:
2026-09-27T00:51:43.3413864Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6ab86810f0f03c0942ef98dd/clusters
2026-09-27T00:51:43.3414440Z         POST: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-27T00:51:43.3414915Z         attribute Disk IOPS. Configured IOPS of 1000 must be equal to or below the
2026-09-27T00:51:43.3415462Z         maximum of 500 for instance size M30. specified. Reason: Bad Request. Params:
2026-09-27T00:51:43.3416006Z         [Disk IOPS. Configured IOPS of 1000 must be equal to or below the maximum of
2026-09-27T00:51:43.3416408Z         500 for instance size M30.], BadRequestDetail: 
2026-09-27T00:51:43.3874374Z --- FAIL: TestAccAdvancedCluster_gen1ProvisionedDiskIops (25.80s)
```

- 2026-09-28: MISSING
- 2026-09-29 PASS 15 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
