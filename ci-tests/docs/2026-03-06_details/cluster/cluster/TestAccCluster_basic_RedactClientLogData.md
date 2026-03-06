# cluster/cluster/TestAccCluster_basic_RedactClientLogData Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 24) FAIL(x 9)
Success rate: 72.73%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-14 00:38](#error-2026-02-14t0038120000) | Step 1 4 | dev |  | 1127.02s
[2026-02-17 00:38](#error-2026-02-17t0038330000) | Step 1 4 | dev | flaky_500 | 960.06s
[2026-02-19 00:39](#error-2026-02-19t0039320000) | Step 1 4 | dev |  | 1383.05s
[2026-02-21 00:36](#error-2026-02-21t0036500000) | Step 1 4 | dev |  | 946.05s
[2026-02-24 00:37](#error-2026-02-24t0037020000) | Step 1 4 | dev |  | 1195.01s
[2026-02-26 00:36](#error-2026-02-26t0036340000) | Step 1 4 | dev |  | 1414.07s
[2026-02-28 00:34](#error-2026-02-28t0034480000) | Step 1 4 | dev |  | 968.01s
[2026-03-03 00:39](#error-2026-03-03t0039400000) | Step 1 4 | dev |  | 1180.02s
[2026-03-05 00:41](#error-2026-03-05t0041030000) | Step 1 4 | dev | flaky_500 | 1396.05s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 28 minutes
- 2026-02-06 PASS 26 minutes
- 2026-02-07 PASS 23 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 26 minutes
- 2026-02-10 PASS 24 minutes
- 2026-02-11 PASS 23 minutes
- 2026-02-12 PASS 26 minutes
- 2026-02-13 PASS 25 minutes
- 2026-02-14

### Error 2026-02-14T00:38:12+00:00
```
2026-02-14T00:38:12.1762642Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-02-14T00:38:12.1776313Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-02-14T00:54:05.5594082Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-14T00:54:05.5595199Z     resource_cluster_test.go:1303: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-02-14T00:54:05.5595982Z         <head>
2026-02-14T00:54:05.5596589Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-14T00:54:05.5597473Z         <title>Error 401 Unauthorized</title>
2026-02-14T00:54:05.5597784Z         </head>
2026-02-14T00:54:05.5598250Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-14T00:54:05.5598637Z         <table>
2026-02-14T00:54:05.5599708Z         <tr><th>URI:</th><td>/test/utils/auth/groups/698fc3f54f915aaf2d3073de/clusters/test-acc-tf-c-4428542023867768904/independentShardScalingMode</td></tr>
2026-02-14T00:54:05.5600444Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-14T00:54:05.5600850Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-14T00:54:05.5601164Z         </table>
2026-02-14T00:54:05.5601378Z         
2026-02-14T00:54:05.5601589Z         </body>
2026-02-14T00:54:05.5601806Z         </html>
2026-02-14T00:56:59.3565280Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1127.18s)
```

- 2026-02-15: MISSING
- 2026-02-16 PASS 25 minutes
- 2026-02-17

### Error 2026-02-17T00:38:33+00:00
```
2026-02-17T00:38:33.7392849Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-02-17T00:38:33.7411293Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-02-17T00:52:10.0740851Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-17T00:52:10.0743680Z     resource_cluster_test.go:1303: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-02-17T00:52:10.0744720Z         <head>
2026-02-17T00:52:10.0745522Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-17T00:52:10.0746321Z         <title>Error 401 Unauthorized</title>
2026-02-17T00:52:10.0746789Z         </head>
2026-02-17T00:52:10.0747121Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-17T00:52:10.0747428Z         <table>
2026-02-17T00:52:10.0748307Z         <tr><th>URI:</th><td>/test/utils/auth/groups/6993b88b3bd1e05530d34031/clusters/test-acc-tf-c-6242170432686280085/independentShardScalingMode</td></tr>
2026-02-17T00:52:10.0749346Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-17T00:52:10.0749770Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-17T00:52:10.0750085Z         </table>
2026-02-17T00:52:10.0750288Z         
2026-02-17T00:52:10.0750493Z         </body>
2026-02-17T00:52:10.0750703Z         </html>
2026-02-17T00:54:34.3313052Z --- FAIL: TestAccCluster_basic_RedactClientLogData (960.59s)
```

- 2026-02-18 PASS 26 minutes
- 2026-02-19

### Error 2026-02-19T00:39:32+00:00
```
2026-02-19T00:39:32.9694216Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-02-19T00:39:32.9702565Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-02-19T00:59:01.2795202Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-19T00:59:01.2796282Z     resource_cluster_test.go:1303: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-02-19T00:59:01.2797227Z         <head>
2026-02-19T00:59:01.2797686Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-19T00:59:01.2798182Z         <title>Error 401 Unauthorized</title>
2026-02-19T00:59:01.2798495Z         </head>
2026-02-19T00:59:01.2798822Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-19T00:59:01.2799128Z         <table>
2026-02-19T00:59:01.2800244Z         <tr><th>URI:</th><td>/test/utils/auth/groups/69965bc699696b9761bc2c2a/clusters/test-acc-tf-c-5584128951970470097/independentShardScalingMode</td></tr>
2026-02-19T00:59:01.2800999Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-19T00:59:01.2801409Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-19T00:59:01.2801726Z         </table>
2026-02-19T00:59:01.2801930Z         
2026-02-19T00:59:01.2802132Z         </body>
2026-02-19T00:59:01.2802340Z         </html>
2026-02-19T01:02:36.5087077Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1383.54s)
```

- 2026-02-20 PASS 26 minutes
- 2026-02-21

### Error 2026-02-21T00:36:50+00:00
```
2026-02-21T00:36:50.9053229Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-02-21T00:36:50.9169076Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-02-21T00:50:24.3559926Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-21T00:50:24.3561655Z     resource_cluster_test.go:1303: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-02-21T00:50:24.3562746Z         <head>
2026-02-21T00:50:24.3563639Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-21T00:50:24.3564562Z         <title>Error 401 Unauthorized</title>
2026-02-21T00:50:24.3565107Z         </head>
2026-02-21T00:50:24.3566137Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-21T00:50:24.3566715Z         <table>
2026-02-21T00:50:24.3568381Z         <tr><th>URI:</th><td>/test/utils/auth/groups/6998fe2431d3075768a975ee/clusters/test-acc-tf-c-2837426245446929161/independentShardScalingMode</td></tr>
2026-02-21T00:50:24.3569838Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-21T00:50:24.3570580Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-21T00:50:24.3571363Z         </table>
2026-02-21T00:50:24.3571728Z         
2026-02-21T00:50:24.3572089Z         </body>
2026-02-21T00:50:24.3572472Z         </html>
2026-02-21T00:52:37.3832047Z --- FAIL: TestAccCluster_basic_RedactClientLogData (946.47s)
```

- 2026-02-22: MISSING
- 2026-02-23 PASS 26 minutes
- 2026-02-24

### Error 2026-02-24T00:37:02+00:00
```
2026-02-24T00:37:02.7158658Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-02-24T00:37:02.7168825Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-02-24T00:53:15.4964518Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-24T00:53:15.4965633Z     resource_cluster_test.go:1303: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-02-24T00:53:15.4966256Z         <head>
2026-02-24T00:53:15.4966865Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-24T00:53:15.4967361Z         <title>Error 401 Unauthorized</title>
2026-02-24T00:53:15.4967653Z         </head>
2026-02-24T00:53:15.4967975Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-24T00:53:15.4968269Z         <table>
2026-02-24T00:53:15.4969116Z         <tr><th>URI:</th><td>/test/utils/auth/groups/699cf2b0ae2412ce6211fc50/clusters/test-acc-tf-c-8087344796261142575/independentShardScalingMode</td></tr>
2026-02-24T00:53:15.4969854Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-24T00:53:15.4970258Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-24T00:53:15.4970582Z         </table>
2026-02-24T00:53:15.4970800Z         
2026-02-24T00:53:15.4970999Z         </body>
2026-02-24T00:53:15.4971202Z         </html>
2026-02-24T00:53:27.4547712Z    test_name=TestAccCluster_partial_advancedConf
2026-02-24T00:56:57.8320967Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1195.12s)
```

- 2026-02-25 PASS 26 minutes
- 2026-02-26

### Error 2026-02-26T00:36:34+00:00
```
2026-02-26T00:36:34.5403264Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-02-26T00:36:34.5420009Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-02-26T00:53:48.0669739Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-26T00:53:48.0670780Z     resource_cluster_test.go:1304: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-02-26T00:53:48.0671814Z         <head>
2026-02-26T00:53:48.0672298Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-26T00:53:48.0672798Z         <title>Error 401 Unauthorized</title>
2026-02-26T00:53:48.0673103Z         </head>
2026-02-26T00:53:48.0673431Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-26T00:53:48.0673741Z         <table>
2026-02-26T00:53:48.0674613Z         <tr><th>URI:</th><td>/test/utils/auth/groups/699f95946ef93d0b6c188a26/clusters/test-acc-tf-c-7919173989622989236/independentShardScalingMode</td></tr>
2026-02-26T00:53:48.0675354Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-26T00:53:48.0675780Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-26T00:53:48.0676107Z         </table>
2026-02-26T00:53:48.0676323Z         
2026-02-26T00:53:48.0676531Z         </body>
2026-02-26T00:53:48.0676747Z         </html>
2026-02-26T01:00:09.2263167Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1414.68s)
```

- 2026-02-27 PASS 25 minutes
- 2026-02-28

### Error 2026-02-28T00:34:48+00:00
```
2026-02-28T00:34:48.9217636Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-02-28T00:34:48.9241744Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-02-28T00:48:33.3880866Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-28T00:48:33.3881885Z     resource_cluster_test.go:1304: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-02-28T00:48:33.3882876Z         <head>
2026-02-28T00:48:33.3883388Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-28T00:48:33.3884060Z         <title>Error 401 Unauthorized</title>
2026-02-28T00:48:33.3884363Z         </head>
2026-02-28T00:48:33.3884689Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-28T00:48:33.3884999Z         <table>
2026-02-28T00:48:33.3885869Z         <tr><th>URI:</th><td>/test/utils/auth/groups/69a2382a9581f2334150757c/clusters/test-acc-tf-c-3230085541908125839/independentShardScalingMode</td></tr>
2026-02-28T00:48:33.3888522Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-28T00:48:33.3889306Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-28T00:48:33.3889826Z         </table>
2026-02-28T00:48:33.3890140Z         
2026-02-28T00:48:33.3890458Z         </body>
2026-02-28T00:48:33.3890807Z         </html>
2026-02-28T00:50:57.0249135Z --- FAIL: TestAccCluster_basic_RedactClientLogData (968.10s)
```

- 2026-03-01: MISSING
- 2026-03-02 PASS 24 minutes
- 2026-03-03

### Error 2026-03-03T00:39:40+00:00
```
2026-03-03T00:39:40.2601310Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-03-03T00:39:40.2608792Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-03-03T00:55:45.8456301Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-03-03T00:55:45.8457769Z     resource_cluster_test.go:1304: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-03-03T00:55:45.8458800Z         <head>
2026-03-03T00:55:45.8459552Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-03-03T00:55:45.8460323Z         <title>Error 401 Unauthorized</title>
2026-03-03T00:55:45.8460956Z         </head>
2026-03-03T00:55:45.8461480Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-03-03T00:55:45.8461966Z         <table>
2026-03-03T00:55:45.8463426Z         <tr><th>URI:</th><td>/test/utils/auth/groups/69a62dcfeeb869d2b503fe7d/clusters/test-acc-tf-c-2956630211911527781/independentShardScalingMode</td></tr>
2026-03-03T00:55:45.8464421Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-03-03T00:55:45.8465474Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-03-03T00:55:45.8465807Z         </table>
2026-03-03T00:55:45.8466028Z         
2026-03-03T00:55:45.8466265Z         </body>
2026-03-03T00:55:45.8466495Z         </html>
2026-03-03T00:59:20.4743923Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1180.21s)
```

- 2026-03-04 PASS 23 minutes
- 2026-03-05

### Error 2026-03-05T00:41:03+00:00
```
2026-03-05T00:41:03.0121904Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-03-05T00:41:03.0153184Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-03-05T00:59:22.3670169Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-03-05T00:59:22.3671716Z     resource_cluster_test.go:1304: Step 1/4 error: Check failed: Check 4/4 error: expected independent shard scaling mode to be CLUSTER, got <html>
2026-03-05T00:59:22.3672660Z         <head>
2026-03-05T00:59:22.3673145Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-03-05T00:59:22.3673925Z         <title>Error 401 Unauthorized</title>
2026-03-05T00:59:22.3674307Z         </head>
2026-03-05T00:59:22.3674731Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-03-05T00:59:22.3675049Z         <table>
2026-03-05T00:59:22.3676228Z         <tr><th>URI:</th><td>/test/utils/auth/groups/69a8d1219b209f59fff3797c/clusters/test-acc-tf-c-5030994311143622492/independentShardScalingMode</td></tr>
2026-03-05T00:59:22.3677291Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-03-05T00:59:22.3677721Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-03-05T00:59:22.3678064Z         </table>
2026-03-05T00:59:22.3678288Z         
2026-03-05T00:59:22.3678497Z         </body>
2026-03-05T00:59:22.3678711Z         </html>
2026-03-05T01:04:19.5002484Z --- FAIL: TestAccCluster_basic_RedactClientLogData (1396.49s)
```

- 2026-03-06 PASS 29 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 22 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 24 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 24 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 24 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 25 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 26 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 24 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
