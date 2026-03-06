# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 27) FAIL(x 9)
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-14 00:38](#error-2026-02-14t0038300000) | Step 1 2 | dev |  | 1556.08s
[2026-02-17 00:38](#error-2026-02-17t0038420000) | Step 1 2 | dev |  | 1463.08s
[2026-02-19 00:39](#error-2026-02-19t0039560000) | Step 1 2 | dev |  | 2621.06s
[2026-02-21 00:37](#error-2026-02-21t0037040000) | Step 1 2 | dev |  | 1464.04s
[2026-02-24 00:37](#error-2026-02-24t0037120000) | Step 1 2 | dev |  | 1584.04s
[2026-02-26 00:36](#error-2026-02-26t0036490000) | Step 1 2 | dev | flaky_500 | 2176.01s
[2026-02-28 00:34](#error-2026-02-28t0034590000) | Step 1 2 | dev |  | 1708.09s
[2026-03-03 00:41](#error-2026-03-03t0041280000) | Step 1 2 | dev | flaky_500 | 1799.01s
[2026-03-05 00:41](#error-2026-03-05t0041120000) | Step 1 2 | dev |  | 2497.03s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 29 minutes
- 2026-02-06 PASS 27 minutes
- 2026-02-07 PASS 24 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 27 minutes
- 2026-02-10 PASS 24 minutes
- 2026-02-11 PASS 25 minutes
- 2026-02-12 PASS 26 minutes
- 2026-02-13 PASS 26 minutes
- 2026-02-14

### Error 2026-02-14T00:38:30+00:00
```
2026-02-14T00:38:30.1916655Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-14T00:39:55.2155199Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-14T01:02:17.1717402Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-14T01:02:17.1718988Z     resource_test.go:676: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-02-14T01:02:17.1719815Z         <head>
2026-02-14T01:02:17.1720411Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-14T01:02:17.1720867Z         <title>Error 401 Unauthorized</title>
2026-02-14T01:02:17.1721312Z         </head>
2026-02-14T01:02:17.1721703Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-14T01:02:17.1722071Z         <table>
2026-02-14T01:02:17.1722887Z         <tr><th>URI:</th><td>/test/utils/auth/groups/698fc4604f915aaf2d322624/clusters/test-acc-tf-c-4429840279526291333/independentShardScalingMode</td></tr>
2026-02-14T01:02:17.1723579Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-14T01:02:17.1723963Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-14T01:02:17.1724264Z         </table>
2026-02-14T01:02:17.1724479Z         
2026-02-14T01:02:17.1724690Z         </body>
2026-02-14T01:02:17.1725029Z         </html>
2026-02-14T01:05:52.0288748Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1556.82s)
```

- 2026-02-15: MISSING
- 2026-02-16 PASS 27 minutes
- 2026-02-17

### Error 2026-02-17T00:38:42+00:00
```
2026-02-17T00:38:42.1891212Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-17T00:40:28.2931708Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-17T01:02:18.4090255Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-17T01:02:18.4091810Z     resource_test.go:676: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-02-17T01:02:18.4092744Z         <head>
2026-02-17T01:02:18.4093226Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-17T01:02:18.4093723Z         <title>Error 401 Unauthorized</title>
2026-02-17T01:02:18.4094109Z         </head>
2026-02-17T01:02:18.4094633Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-17T01:02:18.4095064Z         <table>
2026-02-17T01:02:18.4095957Z         <tr><th>URI:</th><td>/test/utils/auth/groups/6993b9003bd1e05530d48175/clusters/test-acc-tf-c-1173660105460129026/independentShardScalingMode</td></tr>
2026-02-17T01:02:18.4096695Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-17T01:02:18.4097117Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-17T01:02:18.4097440Z         </table>
2026-02-17T01:02:18.4097656Z         
2026-02-17T01:02:18.4097878Z         </body>
2026-02-17T01:02:18.4098098Z         </html>
2026-02-17T01:04:52.0322707Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1463.75s)
```

- 2026-02-18 PASS 28 minutes
- 2026-02-19

### Error 2026-02-19T00:39:56+00:00
```
2026-02-19T00:39:56.2114860Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-19T00:42:27.0888454Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-19T01:14:26.3359822Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-19T01:14:26.3360724Z     resource_test.go:675: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-02-19T01:14:26.3361441Z         <head>
2026-02-19T01:14:26.3362043Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-19T01:14:26.3362543Z         <title>Error 401 Unauthorized</title>
2026-02-19T01:14:26.3363001Z         </head>
2026-02-19T01:14:26.3363652Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-19T01:14:26.3364331Z         <table>
2026-02-19T01:14:26.3365228Z         <tr><th>URI:</th><td>/test/utils/auth/groups/69965c785b4417cf65ba2d1a/clusters/test-acc-tf-c-8747753679086723843/independentShardScalingMode</td></tr>
2026-02-19T01:14:26.3365974Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-19T01:14:26.3366394Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-19T01:14:26.3366730Z         </table>
2026-02-19T01:14:26.3366955Z         
2026-02-19T01:14:26.3367174Z         </body>
2026-02-19T01:14:26.3367393Z         </html>
2026-02-19T01:26:08.6508448Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (2621.59s)
```

- 2026-02-20 PASS 28 minutes
- 2026-02-21

### Error 2026-02-21T00:37:04+00:00
```
2026-02-21T00:37:04.3064419Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-21T00:38:40.2568769Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-21T01:00:30.6844705Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-21T01:00:30.6845712Z     resource_test.go:675: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-02-21T01:00:30.6846422Z         <head>
2026-02-21T01:00:30.6847187Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-21T01:00:30.6847804Z         <title>Error 401 Unauthorized</title>
2026-02-21T01:00:30.6848188Z         </head>
2026-02-21T01:00:30.6848624Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-21T01:00:30.6848937Z         <table>
2026-02-21T01:00:30.6849816Z         <tr><th>URI:</th><td>/test/utils/auth/groups/6998fe9531d3075768ab0e8c/clusters/test-acc-tf-c-6656477739364446576/independentShardScalingMode</td></tr>
2026-02-21T01:00:30.6850559Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-21T01:00:30.6850980Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-21T01:00:30.6851299Z         </table>
2026-02-21T01:00:30.6851521Z         
2026-02-21T01:00:30.6851737Z         </body>
2026-02-21T01:00:30.6851955Z         </html>
2026-02-21T01:03:04.6711203Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1464.42s)
```

- 2026-02-22: MISSING
- 2026-02-23 PASS 27 minutes
- 2026-02-24

### Error 2026-02-24T00:37:12+00:00
```
2026-02-24T00:37:12.0965940Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-24T00:40:00.5496501Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-24T01:03:20.7166633Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-24T01:03:20.7167699Z     resource_test.go:675: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-02-24T01:03:20.7168297Z         <head>
2026-02-24T01:03:20.7168790Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-24T01:03:20.7169294Z         <title>Error 401 Unauthorized</title>
2026-02-24T01:03:20.7169585Z         </head>
2026-02-24T01:03:20.7169916Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-24T01:03:20.7170235Z         <table>
2026-02-24T01:03:20.7171175Z         <tr><th>URI:</th><td>/test/utils/auth/groups/699cf3658dfec41eaa86c667/clusters/test-acc-tf-c-2535580593598597318/independentShardScalingMode</td></tr>
2026-02-24T01:03:20.7172136Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-24T01:03:20.7172807Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-24T01:03:20.7173135Z         </table>
2026-02-24T01:03:20.7173349Z         
2026-02-24T01:03:20.7173550Z         </body>
2026-02-24T01:03:20.7173765Z         </html>
2026-02-24T01:06:24.8949955Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1584.35s)
```

- 2026-02-25 PASS 26 minutes
- 2026-02-26

### Error 2026-02-26T00:36:49+00:00
```
2026-02-26T00:36:49.1657363Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-26T00:39:22.1950025Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-26T01:10:00.0097148Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-26T01:10:00.0098572Z     resource_test.go:675: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-02-26T01:10:00.0099219Z         <head>
2026-02-26T01:10:00.0099773Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-26T01:10:00.0100488Z         <title>Error 401 Unauthorized</title>
2026-02-26T01:10:00.0100783Z         </head>
2026-02-26T01:10:00.0101099Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-26T01:10:00.0101402Z         <table>
2026-02-26T01:10:00.0102270Z         <tr><th>URI:</th><td>/test/utils/auth/groups/699f963fb9916b47c882974c/clusters/test-acc-tf-c-4820037509929647825/independentShardScalingMode</td></tr>
2026-02-26T01:10:00.0103009Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-26T01:10:00.0103415Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-26T01:10:00.0103720Z         </table>
2026-02-26T01:10:00.0104117Z         
2026-02-26T01:10:00.0104331Z         </body>
2026-02-26T01:10:00.0104538Z         </html>
2026-02-26T01:15:38.2706202Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (2176.08s)
```

- 2026-02-27 PASS 26 minutes
- 2026-02-28

### Error 2026-02-28T00:34:59+00:00
```
2026-02-28T00:34:59.8855557Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-28T00:36:47.6678770Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-28T01:01:11.5561486Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-02-28T01:01:11.5562501Z     resource_test.go:675: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-02-28T01:01:11.5563216Z         <head>
2026-02-28T01:01:11.5563825Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-02-28T01:01:11.5564395Z         <title>Error 401 Unauthorized</title>
2026-02-28T01:01:11.5564726Z         </head>
2026-02-28T01:01:11.5565555Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-02-28T01:01:11.5565963Z         <table>
2026-02-28T01:01:11.5566920Z         <tr><th>URI:</th><td>/test/utils/auth/groups/69a238a4318b95c9e5e8ec0f/clusters/test-acc-tf-c-5882893624894441/independentShardScalingMode</td></tr>
2026-02-28T01:01:11.5567648Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-02-28T01:01:11.5568059Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-02-28T01:01:11.5568377Z         </table>
2026-02-28T01:01:11.5568592Z         
2026-02-28T01:01:11.5568809Z         </body>
2026-02-28T01:01:11.5569035Z         </html>
2026-02-28T01:05:16.5672868Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1708.94s)
```

- 2026-03-01: MISSING
- 2026-03-02
  - PASS 25 minutes
  - PASS 25 minutes
- 2026-03-03

### Error 2026-03-03T00:41:28+00:00
```
2026-03-03T00:41:28.0179651Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-03-03T00:45:19.0648009Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-03-03T01:11:43.7957815Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-03-03T01:11:43.7958993Z     resource_test.go:675: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-03-03T01:11:43.7959716Z         <head>
2026-03-03T01:11:43.7960437Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-03-03T01:11:43.7961043Z         <title>Error 401 Unauthorized</title>
2026-03-03T01:11:43.7961492Z         </head>
2026-03-03T01:11:43.7962059Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-03-03T01:11:43.7962436Z         <table>
2026-03-03T01:11:43.7963505Z         <tr><th>URI:</th><td>/test/utils/auth/groups/69a62f24caf9a091745cd70d/clusters/test-acc-tf-c-3639895000047293144/independentShardScalingMode</td></tr>
2026-03-03T01:11:43.7964290Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-03-03T01:11:43.7964720Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-03-03T01:11:43.7965049Z         </table>
2026-03-03T01:11:43.7965634Z         
2026-03-03T01:11:43.7965850Z         </body>
2026-03-03T01:11:43.7966350Z         </html>
2026-03-03T01:15:18.1744478Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (1799.11s)
```

- 2026-03-04 PASS 26 minutes
- 2026-03-05

### Error 2026-03-05T00:41:12+00:00
```
2026-03-05T00:41:12.6997416Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-03-05T00:43:05.2825772Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-03-05T01:16:33.6156909Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-03-05T01:16:33.6158247Z     resource_test.go:675: Step 1/2 error: Check failed: Check 2/2 error: expected independent shard scaling mode to be SHARD, got <html>
2026-03-05T01:16:33.6159035Z         <head>
2026-03-05T01:16:33.6159536Z         <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
2026-03-05T01:16:33.6160062Z         <title>Error 401 Unauthorized</title>
2026-03-05T01:16:33.6160564Z         </head>
2026-03-05T01:16:33.6160905Z         <body><h2>HTTP ERROR 401 Unauthorized</h2>
2026-03-05T01:16:33.6161228Z         <table>
2026-03-05T01:16:33.6162507Z         <tr><th>URI:</th><td>/test/utils/auth/groups/69a8d19ef7b145a8d3d58c37/clusters/test-acc-tf-c-5967571514272142814/independentShardScalingMode</td></tr>
2026-03-05T01:16:33.6163336Z         <tr><th>STATUS:</th><td>401</td></tr>
2026-03-05T01:16:33.6164102Z         <tr><th>MESSAGE:</th><td>Unauthorized</td></tr>
2026-03-05T01:16:33.6164419Z         </table>
2026-03-05T01:16:33.6164630Z         
2026-03-05T01:16:33.6164833Z         </body>
2026-03-05T01:16:33.6165041Z         </html>
2026-03-05T01:24:42.5676841Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema (2497.32s)
```

- 2026-03-06 PASS 31 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 13 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 17 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 24 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 17 minutes
  - PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 15 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 25 minutes
- 2026-03-02 PASS 14 minutes
- 2026-03-03 PASS 18 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
