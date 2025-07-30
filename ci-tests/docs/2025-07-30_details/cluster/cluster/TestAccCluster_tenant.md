# cluster/cluster/TestAccCluster_tenant Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 25) FAIL(x 14)
Success rate: 64.10%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-01 01:57](#error-2025-07-01t0157270000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | flaky_check | 2102.03s
[2025-07-02 00:28](#error-2025-07-02t0028550000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | flaky_check | 2111.09s
[2025-07-03 00:29](#error-2025-07-03t0029320000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | flaky_check | 2109.07s
[2025-07-10 00:29](#error-2025-07-10t0029150000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | flaky_check | 768.06s
[2025-07-10 13:07](#error-2025-07-10t1307090000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa | flaky_check | 2111.07s
[2025-07-11 00:29](#error-2025-07-11t0029490000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2143.03s
[2025-07-14 00:31](#error-2025-07-14t0031010000) |  | dev | timeout | 10802.05s
[2025-07-17 00:30](#error-2025-07-17t0030250000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2171.06s
[2025-07-19 00:28](#error-2025-07-19t0028530000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2102.03s
[2025-07-23 00:30](#error-2025-07-23t0030170000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2252.00s
[2025-07-23 08:15](#error-2025-07-23t0815220000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa |  | 2182.04s
[2025-07-23 13:23](#error-2025-07-23t1323170000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa |  | 2100.09s
[2025-07-27 00:33](#error-2025-07-27t0033410000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa |  | 2111.04s
[2025-07-29 00:32](#error-2025-07-29t0032580000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2103.02s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 17 minutes
  - FAIL 35 minutes

### Error 2025-07-01T01:57:27+00:00
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2025-07-01T01:57:27.327000+00:00-TestAccCluster_tenant',confidence=1.0,ts_when='29 days ago')
CheckFailure for cluster.tenant at Step: 2 Checks: 4
```
2025-07-01T01:57:27.3279324Z === RUN   TestAccCluster_tenant
2025-07-01T01:57:27.3457258Z === CONT  TestAccCluster_tenant
2025-07-01T02:31:29.0197552Z === NAME  TestAccCluster_tenant
2025-07-01T02:31:29.0200083Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-07-01T02:32:29.6613913Z --- FAIL: TestAccCluster_tenant (2102.32s)
```

  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 18 minutes
- 2025-07-02

### Error 2025-07-02T00:28:55+00:00
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2025-07-02T00:28:55.243000+00:00-TestAccCluster_tenant',confidence=1.0,ts_when='28 days ago')
CheckFailure for cluster.tenant at Step: 2 Checks: 4
```
2025-07-02T00:28:55.2432430Z === RUN   TestAccCluster_tenant
2025-07-02T00:28:55.2459099Z === CONT  TestAccCluster_tenant
2025-07-02T01:03:05.9845194Z === NAME  TestAccCluster_tenant
2025-07-02T01:03:05.9847074Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-07-02T01:04:07.1419964Z --- FAIL: TestAccCluster_tenant (2111.90s)
```

- 2025-07-03

### Error 2025-07-03T00:29:32+00:00
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2025-07-03T00:29:32.358000+00:00-TestAccCluster_tenant',confidence=1.0,ts_when='27 days ago')
CheckFailure for cluster.tenant at Step: 2 Checks: 4
```
2025-07-03T00:29:32.3588366Z === RUN   TestAccCluster_tenant
2025-07-03T00:29:32.3676795Z === CONT  TestAccCluster_tenant
2025-07-03T01:03:40.9746007Z === NAME  TestAccCluster_tenant
2025-07-03T01:03:40.9747580Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-07-03T01:04:42.0953442Z --- FAIL: TestAccCluster_tenant (2109.73s)
```

- 2025-07-04 PASS 25 minutes
- 2025-07-05 PASS 17 minutes
- 2025-07-06 PASS 17 minutes
- 2025-07-07 PASS 16 minutes
- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 16 minutes
- 2025-07-10
  - FAIL 12 minutes

### Error 2025-07-10T00:29:15+00:00
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2025-07-10T00:29:15.955000+00:00-TestAccCluster_tenant',confidence=1.0,ts_when='20 days ago')
CheckFailure for cluster.tenant at Step: 2 Checks: 4
```
2025-07-10T00:29:15.9554752Z === RUN   TestAccCluster_tenant
2025-07-10T00:29:15.9593484Z === CONT  TestAccCluster_tenant
2025-07-10T00:41:03.8870134Z === NAME  TestAccCluster_tenant
2025-07-10T00:41:03.8871236Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-07-10T00:42:04.5469511Z --- FAIL: TestAccCluster_tenant (768.59s)
```

  - FAIL 35 minutes

### Error 2025-07-10T13:07:09+00:00
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2025-07-10T13:07:09.928000+00:00-TestAccCluster_tenant',confidence=1.0,ts_when='19 days ago')
CheckFailure for cluster.tenant at Step: 2 Checks: 4
```
2025-07-10T13:07:09.9287092Z === RUN   TestAccCluster_tenant
2025-07-10T13:07:09.9306674Z === CONT  TestAccCluster_tenant
2025-07-10T13:41:20.4092299Z === NAME  TestAccCluster_tenant
2025-07-10T13:41:20.4093283Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-07-10T13:42:21.6008587Z --- FAIL: TestAccCluster_tenant (2111.67s)
```

- 2025-07-11

### Error 2025-07-11T00:29:49+00:00
```
2025-07-11T00:29:49.8175157Z === RUN   TestAccCluster_tenant
2025-07-11T00:29:49.8382614Z === CONT  TestAccCluster_tenant
2025-07-11T00:51:03.8605578Z === NAME  TestAccCluster_tenant
2025-07-11T00:51:03.8606624Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-07-11T00:53:02.5561770Z 2025/07/11 00:53:02 error setting `transaction_lifetime_limit_seconds` for MongoDB Cluster (): 0
2025-07-11T01:05:33.1106235Z --- FAIL: TestAccCluster_tenant (2143.28s)
```

- 2025-07-12 PASS 18 minutes
- 2025-07-13 PASS an hour
- 2025-07-14

### Error 2025-07-14T00:31:01+00:00
```
2025-07-14T00:31:01.0098717Z === RUN   TestAccCluster_tenant
2025-07-14T00:31:01.0118725Z === CONT  TestAccCluster_tenant
2025-07-14T03:31:03.4763899Z === NAME  TestAccCluster_tenant
2025-07-14T03:31:03.4764729Z     resource_cluster_test.go:1028: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:03.4765364Z         
2025-07-14T03:31:03.4766209Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:03.4766855Z         
2025-07-14T03:31:03.4767162Z           with mongodbatlas_cluster.tenant,
2025-07-14T03:31:03.4767751Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "tenant":
2025-07-14T03:31:03.4768276Z           12: 	resource "mongodbatlas_cluster" "tenant" {
2025-07-14T03:31:03.4768561Z         
2025-07-14T03:31:03.5244811Z --- FAIL: TestAccCluster_tenant (10802.51s)
```

- 2025-07-15 PASS 17 minutes
- 2025-07-16 PASS 17 minutes
- 2025-07-17

### Error 2025-07-17T00:30:25+00:00
```
2025-07-17T00:30:25.3118868Z === RUN   TestAccCluster_tenant
2025-07-17T00:30:25.3211842Z === CONT  TestAccCluster_tenant
2025-07-17T01:05:36.2336547Z === NAME  TestAccCluster_tenant
2025-07-17T01:05:36.2338523Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-07-17T01:06:36.9423443Z --- FAIL: TestAccCluster_tenant (2171.63s)
```

- 2025-07-18 PASS 16 minutes
- 2025-07-19

### Error 2025-07-19T00:28:53+00:00
```
2025-07-19T00:28:53.3935546Z === RUN   TestAccCluster_tenant
2025-07-19T00:28:53.4025261Z === CONT  TestAccCluster_tenant
2025-07-19T01:02:55.0200787Z === NAME  TestAccCluster_tenant
2025-07-19T01:02:55.0202557Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-07-19T01:03:55.6652959Z --- FAIL: TestAccCluster_tenant (2102.26s)
```

- 2025-07-20 PASS 18 minutes
- 2025-07-21 PASS 15 minutes
- 2025-07-22 PASS 27 minutes
- 2025-07-23
  - FAIL 37 minutes

### Error 2025-07-23T00:30:17+00:00
```
2025-07-23T00:30:17.5688911Z === RUN   TestAccCluster_tenant
2025-07-23T00:30:17.5743825Z === CONT  TestAccCluster_tenant
2025-07-23T01:06:48.9742329Z === NAME  TestAccCluster_tenant
2025-07-23T01:06:48.9744223Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-07-23T01:07:49.5888301Z --- FAIL: TestAccCluster_tenant (2252.02s)
```

  - FAIL 36 minutes

### Error 2025-07-23T08:15:22+00:00
```
2025-07-23T08:15:22.1401608Z === RUN   TestAccCluster_tenant
2025-07-23T08:15:22.1512574Z === CONT  TestAccCluster_tenant
2025-07-23T08:50:43.1944120Z === NAME  TestAccCluster_tenant
2025-07-23T08:50:43.1945544Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-07-23T08:51:44.5096709Z --- FAIL: TestAccCluster_tenant (2182.36s)
```

  - FAIL 35 minutes

### Error 2025-07-23T13:23:17+00:00
```
2025-07-23T13:23:17.5223946Z === RUN   TestAccCluster_tenant
2025-07-23T13:23:17.5399065Z === CONT  TestAccCluster_tenant
2025-07-23T13:57:17.7037154Z === NAME  TestAccCluster_tenant
2025-07-23T13:57:17.7038213Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-07-23T13:58:18.4320484Z --- FAIL: TestAccCluster_tenant (2100.90s)
```

  - PASS 18 minutes
- 2025-07-24 PASS 20 minutes
- 2025-07-25 PASS 19 minutes
- 2025-07-26 PASS 18 minutes
- 2025-07-27

### Error 2025-07-27T00:33:41+00:00
```
2025-07-27T00:33:41.7754613Z === RUN   TestAccCluster_tenant
2025-07-27T00:33:41.8098488Z === CONT  TestAccCluster_tenant
2025-07-27T01:07:52.1936570Z === NAME  TestAccCluster_tenant
2025-07-27T01:07:52.1937778Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-07-27T01:08:53.1785882Z --- FAIL: TestAccCluster_tenant (2111.38s)
```

- 2025-07-28 PASS 19 minutes
- 2025-07-29

### Error 2025-07-29T00:32:58+00:00
```
2025-07-29T00:32:58.6364549Z === RUN   TestAccCluster_tenant
2025-07-29T00:32:58.6380495Z === CONT  TestAccCluster_tenant
2025-07-29T01:07:01.1907214Z === NAME  TestAccCluster_tenant
2025-07-29T01:07:01.1908811Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-07-29T01:08:01.8801664Z --- FAIL: TestAccCluster_tenant (2103.24s)
```

- 2025-07-30 PASS 18 minutes