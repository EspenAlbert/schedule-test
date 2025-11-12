# cluster/cluster/TestAccCluster_basic_RedactClientLogData Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 37) FAIL(x 5)
Success rate: 88.10%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-06 00:28](#error-2025-10-06t0028060000) | Step 1 4 | dev | flaky_client | 742.03s
[2025-10-18 00:26](#error-2025-10-18t0026380000) | Step 1 4 | dev |  | 956.05s
[2025-10-20 10:26](#error-2025-10-20t1026180000) | Step 1 4 | dev |  | 752.06s
[2025-10-21 00:28](#error-2025-10-21t0028090000) | Step 1 4 | dev | unknown | 854.06s
[2025-10-30 00:28](#error-2025-10-30t0028100000) |  | dev | timeout | 11928.07s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 23 minutes
- 2025-10-05 PASS 20 minutes
- 2025-10-06

### Error 2025-10-06T00:28:06+00:00
```
2025-10-06T00:28:06.3858113Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-10-06T00:28:06.3906798Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-10-06T00:36:55.3367032Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-10-06T00:36:55.3369698Z     resource_cluster_test.go:1328: Step 1/4 error: Check failed: Check 4/4 error: error getting independent shard scaling mode: Get "https://cloud-dev.mongodb.comtest/utils/auth/groups/68e30d182a8cab75bf41717c/clusters/test-acc-tf-c-9217720818340814759/independentShardScalingMode": dial tcp: lookup cloud-dev.mongodb.comtest on 127.0.0.53:53: no such host
2025-10-06T00:40:28.6892878Z --- FAIL: TestAccCluster_basic_RedactClientLogData (742.31s)
```

- 2025-10-07 PASS 20 minutes
- 2025-10-08 PASS 23 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 26 minutes
- 2025-10-11 PASS 27 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 30 minutes
- 2025-10-14 PASS 21 minutes
- 2025-10-15 PASS 22 minutes
- 2025-10-16 PASS 29 minutes
- 2025-10-17 PASS 26 minutes
- 2025-10-18

### Error 2025-10-18T00:26:38+00:00
```
2025-10-18T00:26:38.8847125Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-10-18T00:26:38.8865940Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-10-18T00:36:48.4237921Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-10-18T00:36:48.4239235Z     resource_cluster_test.go:1328: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2025-10-18T00:36:48.4240223Z         <head>
2025-10-18T00:36:48.4240974Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2025-10-18T00:36:48.4248233Z         <title>Error 401 Unauthorized</title>
2025-10-18T00:36:48.4248750Z         </head>
2025-10-18T00:36:48.4249317Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2025-10-18T00:36:48.4249816Z         <table>
2025-10-18T00:36:48.4251386Z         <tr><th>URI:</th><td>/test/utils/auth/groups/68f2dec08a4bcb28a665abb6/clusters/test-acc-tf-c-8967245646149602389/independentShardScalingMode</td></tr>
2025-10-18T00:36:48.4252674Z         <tr><th>STATUS:</th><td>401</td></tr>
2025-10-18T00:36:48.4253584Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2025-10-18T00:36:48.4254120Z         </table>
2025-10-18T00:36:48.4254446Z         
2025-10-18T00:36:48.4254776Z         </body>
2025-10-18T00:36:48.4255130Z         </html>
2025-10-18T00:42:35.4239616Z --- FAIL: TestAccCluster_basic_RedactClientLogData (956.54s)
```

- 2025-10-19 PASS 22 minutes
- 2025-10-20
  - PASS 22 minutes
  - FAIL 12 minutes

### Error 2025-10-20T10:26:18+00:00
```
2025-10-20T10:26:18.7984610Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-10-20T10:26:18.8023585Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-10-20T10:35:17.3163564Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-10-20T10:35:17.3166155Z     resource_cluster_test.go:1328: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2025-10-20T10:35:17.3167273Z         <head>
2025-10-20T10:35:17.3168315Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2025-10-20T10:35:17.3169046Z         <title>Error 401 Unauthorized</title>
2025-10-20T10:35:17.3169347Z         </head>
2025-10-20T10:35:17.3169663Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2025-10-20T10:35:17.3169960Z         <table>
2025-10-20T10:35:17.3170814Z         <tr><th>URI:</th><td>/test/utils/auth/groups/68f60e4c5a13b66d7cb65413/clusters/test-acc-tf-c-8388187908267089584/independentShardScalingMode</td></tr>
2025-10-20T10:35:17.3171701Z         <tr><th>STATUS:</th><td>401</td></tr>
2025-10-20T10:35:17.3172092Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2025-10-20T10:35:17.3172393Z         </table>
2025-10-20T10:35:17.3172600Z         
2025-10-20T10:35:17.3172805Z         </body>
2025-10-20T10:35:17.3173013Z         </html>
2025-10-20T10:38:51.3572103Z --- FAIL: TestAccCluster_basic_RedactClientLogData (752.56s)
```

- 2025-10-21

### Error 2025-10-21T00:28:09+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-10-21T00:28:09.197000+00:00-TestAccCluster_basic_RedactClientLogData',confidence=1.0,ts_when='22 days ago')
Step 1 4
```
2025-10-21T00:28:09.0197588Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-10-21T00:28:09.0214848Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-10-21T00:38:08.5857475Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-10-21T00:38:08.5858794Z     resource_cluster_test.go:1328: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2025-10-21T00:38:08.5859773Z         <head>
2025-10-21T00:38:08.5860263Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2025-10-21T00:38:08.5860961Z         <title>Error 401 Unauthorized</title>
2025-10-21T00:38:08.5861281Z         </head>
2025-10-21T00:38:08.5861620Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2025-10-21T00:38:08.5862043Z         <table>
2025-10-21T00:38:08.5863066Z         <tr><th>URI:</th><td>/test/utils/auth/groups/68f6d39ba5bf152febe1f12d/clusters/test-acc-tf-c-4261689311578756340/independentShardScalingMode</td></tr>
2025-10-21T00:38:08.5863834Z         <tr><th>STATUS:</th><td>401</td></tr>
2025-10-21T00:38:08.5864268Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2025-10-21T00:38:08.5864685Z         </table>
2025-10-21T00:38:08.5864917Z         
2025-10-21T00:38:08.5865139Z         </body>
2025-10-21T00:38:08.5865375Z         </html>
2025-10-21T00:42:23.5813996Z --- FAIL: TestAccCluster_basic_RedactClientLogData (854.56s)
```

- 2025-10-22
  - PASS 24 minutes
  - PASS 22 minutes
- 2025-10-23 PASS 27 minutes
- 2025-10-24 PASS 42 minutes
- 2025-10-25 PASS 24 minutes
- 2025-10-26 PASS 22 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 19 minutes
- 2025-10-29 PASS 27 minutes
- 2025-10-30

### Error 2025-10-30T00:28:10+00:00
```
2025-10-30T00:28:10.4930461Z === RUN   TestAccCluster_basic_RedactClientLogData
2025-10-30T00:28:10.5037961Z === CONT  TestAccCluster_basic_RedactClientLogData
2025-10-30T03:46:59.1646011Z === NAME  TestAccCluster_basic_RedactClientLogData
2025-10-30T03:46:59.1646893Z     resource_cluster_test.go:1328: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:46:59.1647388Z         
2025-10-30T03:46:59.1648548Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-8644483103357893604): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:46:59.1649231Z         
2025-10-30T03:46:59.1649524Z --- FAIL: TestAccCluster_basic_RedactClientLogData (11928.66s)
```

- 2025-10-31 PASS 24 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 22 minutes
- 2025-11-03 PASS 20 minutes
- 2025-11-04 PASS 23 minutes
- 2025-11-05
  - PASS 20 minutes
  - PASS 22 minutes
- 2025-11-06 PASS 28 minutes
- 2025-11-07 PASS 27 minutes
- 2025-11-08 PASS 48 minutes
- 2025-11-09 PASS 22 minutes
- 2025-11-10 PASS 22 minutes
- 2025-11-11 PASS 20 minutes
- 2025-11-12 PASS 23 minutes