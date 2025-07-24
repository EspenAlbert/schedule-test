# global_cluster_config/globalclusterconfig/TestMigGlobalClusterConfig_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 35) FAIL TIMEOUT
Success rate: 97.22%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-08 00:29](#error-2025-07-08t0029090000) |  | dev | flaky_client | 13.06s
[2025-07-14 00:30](#error-2025-07-14t0030590000) |  | dev |  | 7191.00s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 12 minutes
- 2025-06-26 PASS 16 minutes
- 2025-06-27 PASS 13 minutes
- 2025-06-28 PASS 14 minutes
- 2025-06-29 PASS 14 minutes
- 2025-06-30 PASS 14 minutes
- 2025-07-01
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 14 minutes
- 2025-07-02 PASS 12 minutes
- 2025-07-03 PASS 12 minutes
- 2025-07-04 PASS 14 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06 PASS 13 minutes
- 2025-07-07 PASS 14 minutes
- 2025-07-08

### Error 2025-07-08T00:29:09+00:00
```
2025-07-08T00:29:09.2694103Z === RUN   TestMigGlobalClusterConfig_basic
2025-07-08T00:29:09.2696946Z     resource_global_cluster_config_migration_test.go:11: Creating execution project: test-acc-tf-p-2400989897618886506
2025-07-08T00:49:09.6442633Z === CONT  TestMigGlobalClusterConfig_basic
2025-07-08T00:49:14.6483033Z === NAME  TestMigGlobalClusterConfig_basic
2025-07-08T00:49:14.6486417Z     pre_check.go:40: Time before creating cluster: 2025-07-08T00:49:14.648021204Z, ProjectID: 686c6655a5ec7701ec2c6dd5, Cluster name: test-acc-tf-c-2139322327585312130
2025-07-08T00:49:21.1969385Z === NAME  TestMigGlobalClusterConfig_basic
2025-07-08T00:49:21.1970014Z     resource_global_cluster_config_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-08T00:49:21.1970489Z         
2025-07-08T00:49:21.1971531Z         Error: error creating advanced cluster: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups/686c6655a5ec7701ec2c6dd5/clusters": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-07-08T00:49:21.1972497Z         
2025-07-08T00:49:21.1972847Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-08T00:49:21.1973528Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-08T00:49:21.1974173Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-08T00:49:21.1974495Z         
2025-07-08T00:49:21.3857845Z --- FAIL: TestMigGlobalClusterConfig_basic (13.56s)
```

- 2025-07-09 PASS 14 minutes
- 2025-07-10
  - PASS 13 minutes
  - PASS 12 minutes
- 2025-07-11 PASS 38 minutes
- 2025-07-12 PASS 13 minutes
- 2025-07-13 PASS 13 minutes
- 2025-07-14

### Error 2025-07-14T00:30:59+00:00
```
2025-07-14T00:30:59.6450585Z === RUN   TestMigGlobalClusterConfig_basic
2025-07-14T00:30:59.6452576Z     resource_global_cluster_config_migration_test.go:11: Creating execution project: test-acc-tf-p-3257709677013328724
2025-07-14T03:31:08.6792605Z === CONT  TestMigGlobalClusterConfig_basic
2025-07-14T03:31:13.6827166Z === NAME  TestMigGlobalClusterConfig_basic
2025-07-14T03:31:13.6830192Z     pre_check.go:40: Time before creating cluster: 2025-07-14T03:31:13.682418664Z, ProjectID: 68744fc452cba864e5f0fb32, Cluster name: test-acc-tf-c-1362113410674215117
2025-07-14T05:30:59.6480798Z 		TestAccGlobalClusterConfig_iss (1h59m51s)
2025-07-14T05:30:59.6481476Z 		TestAccGlobalClusterConfig_withBackup (1h59m51s)
2025-07-14T05:30:59.6482129Z 		TestMigGlobalClusterConfig_basic (1h59m51s)
```

- 2025-07-15 PASS 16 minutes
- 2025-07-16 PASS 14 minutes
- 2025-07-17 PASS 15 minutes
- 2025-07-18 PASS 23 minutes
- 2025-07-19 PASS 13 minutes
- 2025-07-20 PASS 15 minutes
- 2025-07-21 PASS 13 minutes
- 2025-07-22 PASS 14 minutes
- 2025-07-23
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-07-24 PASS 13 minutes