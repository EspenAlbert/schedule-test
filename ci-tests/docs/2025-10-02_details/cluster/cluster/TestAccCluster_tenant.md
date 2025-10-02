# cluster/cluster/TestAccCluster_tenant Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 28) FAIL(x 14)
Success rate: 66.67%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-07 00:28](#error-2025-09-07t0028560000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa | 2100.03s
[2025-09-08 00:28](#error-2025-09-08t0028230000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2732.02s
[2025-09-11 00:27](#error-2025-09-11t0027040000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2101.03s
[2025-09-14 00:28](#error-2025-09-14t0028420000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa | 3869.08s
[2025-09-15 06:20](#error-2025-09-15t0620470000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa | 2170.07s
[2025-09-17 00:27](#error-2025-09-17t0027090000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2112.10s
[2025-09-21 00:29](#error-2025-09-21t0029260000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa | 2100.03s
[2025-09-23 00:27](#error-2025-09-23t0027110000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2107.06s
[2025-09-24 00:26](#error-2025-09-24t0026590000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2179.02s
[2025-09-27 00:26](#error-2025-09-27t0026200000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2111.00s
[2025-09-28 00:29](#error-2025-09-28t0029440000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa | 2099.08s
[2025-10-01 03:22](#error-2025-10-01t0322560000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2106.08s
[2025-10-01 07:28](#error-2025-10-01t0728140000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2105.07s
[2025-10-01 14:14](#error-2025-10-01t1414320000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2111.02s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 44 minutes
- 2025-09-04 PASS 30 minutes
- 2025-09-05 PASS 21 minutes
- 2025-09-06 PASS 33 minutes
- 2025-09-07

### Error 2025-09-07T00:28:56+00:00
```
2025-09-07T00:28:56.4799715Z === RUN   TestAccCluster_tenant
2025-09-07T00:28:56.4835592Z === CONT  TestAccCluster_tenant
2025-09-07T01:02:56.1976611Z === NAME  TestAccCluster_tenant
2025-09-07T01:02:56.1977768Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-09-07T01:03:56.7964864Z --- FAIL: TestAccCluster_tenant (2100.32s)
```

- 2025-09-08
  - FAIL 45 minutes

### Error 2025-09-08T00:28:23+00:00
```
2025-09-08T00:28:23.5632052Z === RUN   TestAccCluster_tenant
2025-09-08T00:28:23.5646820Z === CONT  TestAccCluster_tenant
2025-09-08T01:12:55.1722701Z === NAME  TestAccCluster_tenant
2025-09-08T01:12:55.1724112Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-09-08T01:13:55.7522467Z --- FAIL: TestAccCluster_tenant (2732.19s)
```

  - PASS 22 minutes
  - PASS 32 minutes
- 2025-09-09 PASS 33 minutes
- 2025-09-10 PASS 26 minutes
- 2025-09-11

### Error 2025-09-11T00:27:04+00:00
```
2025-09-11T00:27:04.7841600Z === RUN   TestAccCluster_tenant
2025-09-11T00:27:04.7857224Z === CONT  TestAccCluster_tenant
2025-09-11T01:01:05.5575799Z === NAME  TestAccCluster_tenant
2025-09-11T01:01:05.5576655Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-09-11T01:02:06.1153494Z --- FAIL: TestAccCluster_tenant (2101.33s)
```

- 2025-09-12 PASS 25 minutes
- 2025-09-13 PASS 34 minutes
- 2025-09-14

### Error 2025-09-14T00:28:42+00:00
```
2025-09-14T00:28:42.3122829Z === RUN   TestAccCluster_tenant
2025-09-14T00:28:42.3472251Z === CONT  TestAccCluster_tenant
2025-09-14T01:32:11.4789560Z === NAME  TestAccCluster_tenant
2025-09-14T01:32:11.4790681Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-09-14T01:33:12.1811877Z --- FAIL: TestAccCluster_tenant (3869.84s)
```

- 2025-09-15
  - PASS 19 minutes
  - FAIL 36 minutes

### Error 2025-09-15T06:20:47+00:00
```
2025-09-15T06:20:47.5452927Z === RUN   TestAccCluster_tenant
2025-09-15T06:20:47.5534685Z === CONT  TestAccCluster_tenant
2025-09-15T06:55:57.7306348Z === NAME  TestAccCluster_tenant
2025-09-15T06:55:57.7307263Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-09-15T06:56:58.2624825Z --- FAIL: TestAccCluster_tenant (2170.71s)
```

- 2025-09-16 PASS 24 minutes
- 2025-09-17

### Error 2025-09-17T00:27:09+00:00
```
2025-09-17T00:27:09.8398278Z === RUN   TestAccCluster_tenant
2025-09-17T00:27:09.8610171Z === CONT  TestAccCluster_tenant
2025-09-17T01:01:22.0025603Z === NAME  TestAccCluster_tenant
2025-09-17T01:01:22.0027272Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-09-17T01:02:22.8222854Z --- FAIL: TestAccCluster_tenant (2112.97s)
```

- 2025-09-18 PASS 28 minutes
- 2025-09-19 PASS 22 minutes
- 2025-09-20 PASS 31 minutes
- 2025-09-21

### Error 2025-09-21T00:29:26+00:00
```
2025-09-21T00:29:26.8642099Z === RUN   TestAccCluster_tenant
2025-09-21T00:29:26.8778564Z === CONT  TestAccCluster_tenant
2025-09-21T01:03:26.5530602Z === NAME  TestAccCluster_tenant
2025-09-21T01:03:26.5531914Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-09-21T01:04:27.1353575Z --- FAIL: TestAccCluster_tenant (2100.27s)
```

- 2025-09-22 PASS 18 minutes
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