# cluster/cluster/TestAccCluster_tenant Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 29) FAIL(x 12)
Success rate: 70.73%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-23 00:27](#error-2025-09-23t0027110000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2107.06s
[2025-09-24 00:26](#error-2025-09-24t0026590000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2179.02s
[2025-09-27 00:26](#error-2025-09-27t0026200000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2111.00s
[2025-09-28 00:29](#error-2025-09-28t0029440000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa | 2099.08s
[2025-10-01 03:22](#error-2025-10-01t0322560000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2106.08s
[2025-10-01 07:28](#error-2025-10-01t0728140000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2105.07s
[2025-10-01 14:14](#error-2025-10-01t1414320000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2111.02s
[2025-10-03 00:26](#error-2025-10-03t0026010000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2101.05s
[2025-10-04 00:25](#error-2025-10-04t0025510000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2100.04s
[2025-10-05 00:29](#error-2025-10-05t0029350000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa | 2106.08s
[2025-10-06 00:28](#error-2025-10-06t0028060000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2100.02s
[2025-10-13 00:29](#error-2025-10-13t0029310000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2432.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23

### Error 2025-09-23T00:27:11+00:00
```
2025-09-23T00:27:11.8188396Z === RUN   TestAccCluster_tenant
2025-09-23T00:27:11.8373401Z === CONT  TestAccCluster_tenant
2025-09-23T01:01:18.3859355Z === NAME  TestAccCluster_tenant
2025-09-23T01:01:18.3860713Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-09-23T01:02:19.3926571Z --- FAIL: TestAccCluster_tenant (2107.57s)
```

- 2025-09-24

### Error 2025-09-24T00:26:59+00:00
```
2025-09-24T00:26:59.5842741Z === RUN   TestAccCluster_tenant
2025-09-24T00:26:59.6059704Z === CONT  TestAccCluster_tenant
2025-09-24T01:02:17.7959967Z === NAME  TestAccCluster_tenant
2025-09-24T01:02:17.7961336Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-09-24T01:03:18.7756062Z --- FAIL: TestAccCluster_tenant (2179.18s)
```

- 2025-09-25 PASS 21 minutes
- 2025-09-26 PASS 21 minutes
- 2025-09-27

### Error 2025-09-27T00:26:20+00:00
```
2025-09-27T00:26:20.0400398Z === RUN   TestAccCluster_tenant
2025-09-27T00:26:20.0480563Z === CONT  TestAccCluster_tenant
2025-09-27T01:00:30.5213116Z === NAME  TestAccCluster_tenant
2025-09-27T01:00:30.5214553Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-09-27T01:01:31.0765518Z --- FAIL: TestAccCluster_tenant (2111.03s)
```

- 2025-09-28

### Error 2025-09-28T00:29:44+00:00
```
2025-09-28T00:29:44.0520683Z === RUN   TestAccCluster_tenant
2025-09-28T00:29:44.0704916Z === CONT  TestAccCluster_tenant
2025-09-28T01:03:43.3708707Z === NAME  TestAccCluster_tenant
2025-09-28T01:03:43.3709782Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-09-28T01:04:43.8751379Z --- FAIL: TestAccCluster_tenant (2099.80s)
```

- 2025-09-29 PASS 27 minutes
- 2025-09-30
  - PASS 25 minutes
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-10-01
  - PASS 23 minutes
  - FAIL 35 minutes

### Error 2025-10-01T03:22:56+00:00
```
2025-10-01T03:22:56.8686835Z === RUN   TestAccCluster_tenant
2025-10-01T03:22:56.8914111Z === CONT  TestAccCluster_tenant
2025-10-01T03:57:03.0326878Z === NAME  TestAccCluster_tenant
2025-10-01T03:57:03.0329322Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-10-01T03:58:03.6414189Z --- FAIL: TestAccCluster_tenant (2106.76s)
```

  - PASS 37 minutes
  - FAIL 35 minutes

### Error 2025-10-01T07:28:14+00:00
```
2025-10-01T07:28:14.2837251Z === RUN   TestAccCluster_tenant
2025-10-01T07:28:14.2858304Z === CONT  TestAccCluster_tenant
2025-10-01T08:02:19.2712439Z === NAME  TestAccCluster_tenant
2025-10-01T08:02:19.2713408Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-10-01T08:03:20.0327488Z --- FAIL: TestAccCluster_tenant (2105.75s)
```

  - PASS 33 minutes
  - PASS 21 minutes
  - PASS 34 minutes
  - FAIL 35 minutes

### Error 2025-10-01T14:14:32+00:00
```
2025-10-01T14:14:32.9139349Z === RUN   TestAccCluster_tenant
2025-10-01T14:14:32.9160035Z === CONT  TestAccCluster_tenant
2025-10-01T14:48:43.0025732Z === NAME  TestAccCluster_tenant
2025-10-01T14:48:43.0027279Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-10-01T14:49:44.1244249Z --- FAIL: TestAccCluster_tenant (2111.21s)
```

- 2025-10-02 PASS 31 minutes
- 2025-10-03

### Error 2025-10-03T00:26:01+00:00
```
2025-10-03T00:26:01.3878906Z === RUN   TestAccCluster_tenant
2025-10-03T00:26:01.3902668Z === CONT  TestAccCluster_tenant
2025-10-03T01:00:02.3159181Z === NAME  TestAccCluster_tenant
2025-10-03T01:00:02.3160982Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-10-03T01:01:02.9205786Z --- FAIL: TestAccCluster_tenant (2101.53s)
```

- 2025-10-04

### Error 2025-10-04T00:25:51+00:00
```
2025-10-04T00:25:51.4625904Z === RUN   TestAccCluster_tenant
2025-10-04T00:25:51.4717162Z === CONT  TestAccCluster_tenant
2025-10-04T00:59:51.3692553Z === NAME  TestAccCluster_tenant
2025-10-04T00:59:51.3693988Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-10-04T01:00:51.8984268Z --- FAIL: TestAccCluster_tenant (2100.43s)
```

- 2025-10-05

### Error 2025-10-05T00:29:35+00:00
```
2025-10-05T00:29:35.4861679Z === RUN   TestAccCluster_tenant
2025-10-05T00:29:35.5044552Z === CONT  TestAccCluster_tenant
2025-10-05T01:03:41.3800003Z === NAME  TestAccCluster_tenant
2025-10-05T01:03:41.3801343Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-10-05T01:04:42.2677565Z --- FAIL: TestAccCluster_tenant (2106.76s)
```

- 2025-10-06

### Error 2025-10-06T00:28:06+00:00
```
2025-10-06T00:28:06.3849456Z === RUN   TestAccCluster_tenant
2025-10-06T00:28:06.3908315Z === CONT  TestAccCluster_tenant
2025-10-06T01:02:06.0613243Z === NAME  TestAccCluster_tenant
2025-10-06T01:02:06.0614680Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-10-06T01:03:06.5849059Z --- FAIL: TestAccCluster_tenant (2100.20s)
```

- 2025-10-07 PASS 25 minutes
- 2025-10-08 PASS 26 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 25 minutes
- 2025-10-11 PASS 25 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13

### Error 2025-10-13T00:29:31+00:00
```
2025-10-13T00:29:31.6706802Z === RUN   TestAccCluster_tenant
2025-10-13T00:29:31.6724744Z === CONT  TestAccCluster_tenant
2025-10-13T01:03:37.6223451Z === NAME  TestAccCluster_tenant
2025-10-13T01:03:37.6224834Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-10-13T01:10:04.2669487Z --- FAIL: TestAccCluster_tenant (2432.60s)
```

- 2025-10-14 PASS 31 minutes
- 2025-10-15 PASS 23 minutes
- 2025-10-16 PASS 36 minutes
- 2025-10-17 PASS 26 minutes
- 2025-10-18 PASS 23 minutes
- 2025-10-19 PASS 22 minutes
- 2025-10-20
  - PASS 35 minutes
  - PASS 19 minutes
- 2025-10-21 PASS 21 minutes
- 2025-10-22
  - PASS 31 minutes
  - PASS 18 minutes