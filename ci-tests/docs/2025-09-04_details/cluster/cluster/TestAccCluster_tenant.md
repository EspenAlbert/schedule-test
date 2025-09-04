# cluster/cluster/TestAccCluster_tenant Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 21) FAIL(x 17) TIMEOUT
Success rate: 55.26%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-09 00:28](#error-2025-08-09t0028360000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2460.10s
[2025-08-12 00:28](#error-2025-08-12t0028160000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2284.05s
[2025-08-13 00:29](#error-2025-08-13t0029050000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2175.00s
[2025-08-16 00:27](#error-2025-08-16t0027350000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2472.09s
[2025-08-18 00:31](#error-2025-08-18t0031150000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2300.07s
[2025-08-21 00:26](#error-2025-08-21t0026500000) |  | dev | timeout | 17994.00s
[2025-08-22 00:27](#error-2025-08-22t0027470000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2101.08s
[2025-08-23 00:26](#error-2025-08-23t0026440000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2505.09s
[2025-08-24 00:30](#error-2025-08-24t0030350000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa |  | 2243.03s
[2025-08-25 00:28](#error-2025-08-25t0028580000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2283.03s
[2025-08-26 00:27](#error-2025-08-26t0027260000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2619.02s
[2025-08-28 00:27](#error-2025-08-28t0027210000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2454.07s
[2025-08-30 00:26](#error-2025-08-30t0026040000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2321.08s
[2025-08-31 00:29](#error-2025-08-31t0029480000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa |  | 3865.04s
[2025-09-01 00:30](#error-2025-09-01t0030190000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s
[2025-09-01 05:58](#error-2025-09-01t0558120000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 3555.07s
[2025-09-01 12:22](#error-2025-09-01t1222510000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2171.03s
[2025-09-01 16:10](#error-2025-09-01t1610450000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2244.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 38 minutes
- 2025-08-07 PASS 52 minutes
- 2025-08-08 PASS 34 minutes
- 2025-08-09

### Error 2025-08-09T00:28:36+00:00
```
2025-08-09T00:28:36.1375240Z === RUN   TestAccCluster_tenant
2025-08-09T00:28:36.1392418Z === CONT  TestAccCluster_tenant
2025-08-09T01:08:36.0639234Z === NAME  TestAccCluster_tenant
2025-08-09T01:08:36.0640539Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-08-09T01:09:37.1240527Z --- FAIL: TestAccCluster_tenant (2460.99s)
```

- 2025-08-10 PASS 32 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - FAIL 38 minutes

### Error 2025-08-12T00:28:16+00:00
```
2025-08-12T00:28:16.4588084Z === RUN   TestAccCluster_tenant
2025-08-12T00:28:16.4610653Z === CONT  TestAccCluster_tenant
2025-08-12T01:03:29.4878306Z === NAME  TestAccCluster_tenant
2025-08-12T01:03:29.4879489Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-08-12T01:06:20.9471416Z --- FAIL: TestAccCluster_tenant (2284.49s)
```

  - PASS 25 minutes
- 2025-08-13

### Error 2025-08-13T00:29:05+00:00
```
2025-08-13T00:29:05.9407296Z === RUN   TestAccCluster_tenant
2025-08-13T00:29:05.9512334Z === CONT  TestAccCluster_tenant
2025-08-13T01:04:20.2250187Z === NAME  TestAccCluster_tenant
2025-08-13T01:04:20.2251731Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-08-13T01:05:20.9559012Z --- FAIL: TestAccCluster_tenant (2175.01s)
```

- 2025-08-14 PASS 37 minutes
- 2025-08-15 PASS 20 minutes
- 2025-08-16

### Error 2025-08-16T00:27:35+00:00
```
2025-08-16T00:27:35.7436702Z === RUN   TestAccCluster_tenant
2025-08-16T00:27:35.7468127Z === CONT  TestAccCluster_tenant
2025-08-16T01:03:56.9202245Z === NAME  TestAccCluster_tenant
2025-08-16T01:03:56.9203296Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-08-16T01:08:48.6194389Z --- FAIL: TestAccCluster_tenant (2472.87s)
```

- 2025-08-17 PASS 46 minutes
- 2025-08-18

### Error 2025-08-18T00:31:15+00:00
```
2025-08-18T00:31:15.7679432Z === RUN   TestAccCluster_tenant
2025-08-18T00:31:15.7756888Z === CONT  TestAccCluster_tenant
2025-08-18T01:06:34.3084657Z === NAME  TestAccCluster_tenant
2025-08-18T01:06:34.3085775Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-08-18T01:09:36.5143554Z --- FAIL: TestAccCluster_tenant (2300.74s)
```

- 2025-08-19 PASS 27 minutes
- 2025-08-20
  - PASS 36 minutes
  - PASS 28 minutes
- 2025-08-21

### Error 2025-08-21T00:26:50+00:00
```
2025-08-21T00:26:50.0802998Z === RUN   TestAccCluster_tenant
2025-08-21T00:26:50.0849277Z === CONT  TestAccCluster_tenant
2025-08-21T03:29:55.4689550Z === NAME  TestAccCluster_tenant
2025-08-21T03:29:55.4690288Z     resource_cluster_test.go:1028: Step 2/2 error: Error running apply: exit status 1
2025-08-21T03:29:55.4690843Z         
2025-08-21T03:29:55.4691854Z         Error: error updating MongoDB Cluster (test-acc-tf-c-837159678962808265): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-08-21T03:29:55.4692598Z         
2025-08-21T03:29:55.4692941Z           with mongodbatlas_cluster.tenant,
2025-08-21T03:29:55.4693606Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "tenant":
2025-08-21T03:29:55.4694250Z           12: 	resource "mongodbatlas_cluster" "tenant" {
2025-08-21T03:29:55.4694621Z         
2025-08-21T05:26:44.2174417Z panic: test timed out after 5h0m0s
2025-08-21T05:26:44.2175109Z 	running tests:
2025-08-21T05:26:44.2174417Z panic: test timed out after 5h0m0s
2025-08-21T05:26:44.2175109Z 	running tests:
2025-08-21T05:26:44.2175644Z 		TestAccCluster_tenant (4h59m54s)
```

- 2025-08-22

### Error 2025-08-22T00:27:47+00:00
```
2025-08-22T00:27:47.1572115Z === RUN   TestAccCluster_tenant
2025-08-22T00:27:47.1638626Z === CONT  TestAccCluster_tenant
2025-08-22T01:01:48.3716323Z === NAME  TestAccCluster_tenant
2025-08-22T01:01:48.3717907Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-08-22T01:02:48.9448224Z --- FAIL: TestAccCluster_tenant (2101.78s)
```

- 2025-08-23

### Error 2025-08-23T00:26:44+00:00
```
2025-08-23T00:26:44.6394611Z === RUN   TestAccCluster_tenant
2025-08-23T00:26:44.6494241Z === CONT  TestAccCluster_tenant
2025-08-23T01:05:28.9471080Z === NAME  TestAccCluster_tenant
2025-08-23T01:05:28.9472310Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-08-23T01:08:30.5312421Z --- FAIL: TestAccCluster_tenant (2505.89s)
```

- 2025-08-24

### Error 2025-08-24T00:30:35+00:00
```
2025-08-24T00:30:35.9493204Z === RUN   TestAccCluster_tenant
2025-08-24T00:30:35.9510854Z === CONT  TestAccCluster_tenant
2025-08-24T01:06:58.5838662Z === NAME  TestAccCluster_tenant
2025-08-24T01:06:58.5839662Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-08-24T01:07:59.2851202Z --- FAIL: TestAccCluster_tenant (2243.34s)
```

- 2025-08-25

### Error 2025-08-25T00:28:58+00:00
```
2025-08-25T00:28:58.2835713Z === RUN   TestAccCluster_tenant
2025-08-25T00:28:58.2879292Z === CONT  TestAccCluster_tenant
2025-08-25T01:05:30.2463343Z === NAME  TestAccCluster_tenant
2025-08-25T01:05:30.2465440Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-08-25T01:07:01.6131665Z --- FAIL: TestAccCluster_tenant (2283.33s)
```

- 2025-08-26

### Error 2025-08-26T00:27:26+00:00
```
2025-08-26T00:27:26.4905473Z === RUN   TestAccCluster_tenant
2025-08-26T00:27:26.4995397Z === CONT  TestAccCluster_tenant
2025-08-26T01:06:13.0974537Z === NAME  TestAccCluster_tenant
2025-08-26T01:06:13.0979736Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-08-26T01:11:05.6845572Z --- FAIL: TestAccCluster_tenant (2619.19s)
```

- 2025-08-27 PASS 43 minutes
- 2025-08-28

### Error 2025-08-28T00:27:21+00:00
```
2025-08-28T00:27:21.3197380Z === RUN   TestAccCluster_tenant
2025-08-28T00:27:21.3338702Z === CONT  TestAccCluster_tenant
2025-08-28T01:07:15.2383221Z === NAME  TestAccCluster_tenant
2025-08-28T01:07:15.2385086Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-08-28T01:08:15.9863527Z --- FAIL: TestAccCluster_tenant (2454.65s)
```

- 2025-08-29 PASS 38 minutes
- 2025-08-30

### Error 2025-08-30T00:26:04+00:00
```
2025-08-30T00:26:04.3027225Z === RUN   TestAccCluster_tenant
2025-08-30T00:26:04.3063153Z === CONT  TestAccCluster_tenant
2025-08-30T01:01:14.7701792Z === NAME  TestAccCluster_tenant
2025-08-30T01:01:14.7703180Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-08-30T01:04:46.1094518Z --- FAIL: TestAccCluster_tenant (2321.81s)
```

- 2025-08-31

### Error 2025-08-31T00:29:48+00:00
```
2025-08-31T00:29:48.6559897Z === RUN   TestAccCluster_tenant
2025-08-31T00:29:48.6702568Z === CONT  TestAccCluster_tenant
2025-08-31T01:33:13.0717343Z === NAME  TestAccCluster_tenant
2025-08-31T01:33:13.0718655Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-08-31T01:34:14.0211931Z --- FAIL: TestAccCluster_tenant (3865.36s)
```

- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:19+00:00
```
2025-09-01T00:30:19.7981731Z === RUN   TestAccCluster_tenant
2025-09-01T00:30:19.9119190Z     shared_resource.go:93: 
2025-09-01T00:30:19.9121531Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:19.9124483Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:19.9126542Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:19.9128583Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:19.9130595Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:19.9132873Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1025
2025-09-01T00:30:19.9133757Z         	Error:      	Received unexpected error:
2025-09-01T00:30:19.9136511Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:19.9137723Z         	Test:       	TestAccCluster_tenant
2025-09-01T00:30:19.9139914Z         	Messages:   	Project creation failed: test-acc-tf-p-3290881242175996775, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:19.9141344Z --- FAIL: TestAccCluster_tenant (0.12s)
```

  - FAIL 59 minutes

### Error 2025-09-01T05:58:12+00:00
```
2025-09-01T05:58:12.4685647Z === RUN   TestAccCluster_tenant
2025-09-01T05:58:12.4708899Z === CONT  TestAccCluster_tenant
2025-09-01T06:54:27.0865615Z === NAME  TestAccCluster_tenant
2025-09-01T06:54:27.0867437Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-09-01T06:57:28.2242864Z --- FAIL: TestAccCluster_tenant (3555.75s)
```

  - PASS an hour
  - PASS 28 minutes
  - FAIL 36 minutes

### Error 2025-09-01T12:22:51+00:00
```
2025-09-01T12:22:51.4764328Z === RUN   TestAccCluster_tenant
2025-09-01T12:22:51.5044093Z === CONT  TestAccCluster_tenant
2025-09-01T12:58:02.1887751Z === NAME  TestAccCluster_tenant
2025-09-01T12:58:02.1889814Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-09-01T12:59:02.8323331Z --- FAIL: TestAccCluster_tenant (2171.34s)
```

  - PASS 37 minutes
  - PASS 26 minutes
  - FAIL 37 minutes

### Error 2025-09-01T16:10:45+00:00
```
2025-09-01T16:10:45.8234114Z === RUN   TestAccCluster_tenant
2025-09-01T16:10:45.8257944Z === CONT  TestAccCluster_tenant
2025-09-01T16:45:59.1575055Z === NAME  TestAccCluster_tenant
2025-09-01T16:45:59.1576049Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-09-01T16:48:10.5230921Z --- FAIL: TestAccCluster_tenant (2244.70s)
```

- 2025-09-02 PASS 31 minutes
- 2025-09-03 PASS 44 minutes
- 2025-09-04 PASS 30 minutes